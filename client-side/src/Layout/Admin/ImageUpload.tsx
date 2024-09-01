import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/firebase/firebase.config"; // adjust path as necessary

interface ImageUploadProps {
  onUploadComplete: (urls: string[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUploadComplete }) => {
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress((prev) => ({ ...prev, [file.name]: progress }));
          },
          (error) => {
            console.error("Upload failed: ", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUploadedUrls((prev) => [...prev, downloadURL]);
              onUploadComplete([...uploadedUrls, downloadURL]);
            });
          }
        );
      });
    },
    [onUploadComplete, uploadedUrls]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-gray-400 p-4 cursor-pointer">
      <input {...getInputProps()} />
      <p>Drag & drop some files here, or click to select files</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {Object.keys(uploadProgress).map((fileName, index) => (
          <div key={index} className="text-center">
            <p>{fileName}</p>
            <progress value={uploadProgress[fileName]} max="100" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {uploadedUrls.map((url, index) => (
          <img key={index} src={url} alt={`Uploaded ${index}`} className="h-20 w-20 object-cover rounded-md" />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
