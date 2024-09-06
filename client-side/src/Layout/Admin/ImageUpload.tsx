import React, { useState, useCallback } from "react";
import { Accept, useDropzone } from "react-dropzone";

interface ImageUploadProps {
  onFilesSelected: (files: File[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onFilesSelected }) => {
  const [previews, setPreviews] = useState<string[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFilesSelected(acceptedFiles);

      // Generate image previews
      const previewUrls = acceptedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setPreviews(previewUrls);
    },
    [onFilesSelected]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] } as Accept,
    multiple: true,
  });

  return (
    <div>
      <div {...getRootProps()} className="border-2 border-dashed border-gray-400 p-4 cursor-pointer">
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        {previews.map((preview, index) => (
          <img
            key={index}
            src={preview}
            alt={`Preview ${index}`}
            className="h-20 w-20 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
