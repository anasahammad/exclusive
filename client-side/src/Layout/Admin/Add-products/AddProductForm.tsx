import AdminInput from "@/components/Admin/AdminInput";
import CategoryInput from "@/components/Admin/CategoryInput";
import SelectColor from "@/components/Admin/SelectColor";
import SelectSize from "@/components/Admin/SelectSize";
import CustomCheckbox from "@/components/shared/CustomCheckbox";
import TextArea from "@/components/shared/TextArea";
import { storage } from "@/firebase/firebase.config";
import { categories } from "@/utils/categories";
import { colors } from "@/utils/colors"; // Import colors array
import { sizes } from "@/utils/sizes";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import ImageUpload from "../ImageUpload";
import toast from "react-hot-toast";

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkedColors, setCheckedColors] = useState<{ color: string; colorCode: string }[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      productName: "",
      description: "",
      brand: "",
      images: [],
      colors: [],
      sizes: [],
      reviews: [],
      inStock: false,
      isNew: false,
      bestSelling: false,
      category: "",
      price: "",
      prevPrice: "",
      discount: ""
    },
  });

  const category = watch("category");
  const selectedSizes = watch("sizes") || [];

  const handleChecked = (colorItem: { color: string; colorCode: string }, checked: boolean) => {
    if (checked) {
        setCheckedColors((prev) => [...prev, colorItem]);
        setValue("colors", [...checkedColors, colorItem], {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    } else {
        const updatedColors = checkedColors.filter((c) => c.color !== colorItem.color);
        setCheckedColors(updatedColors);
        setValue("colors", updatedColors, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    }
};

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const uploadImages = async (files: File[]): Promise<{ productImage: string }[]> => {
    const imageObjects: { productImage: string }[] = [];

    for (const file of files) {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      await new Promise<void>((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          null,
          (error) => reject(error),
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            imageObjects.push({ productImage: downloadURL });
            resolve();
          }
        );
      });
    }

    return imageObjects;
  };

  const handleSizeChange = (size: string) => {
    if (selectedSizes.includes(size)) {
      setValue("sizes", selectedSizes.filter((s: string) => s !== size), {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    } else {
      setValue("sizes", [...selectedSizes, size], {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (data: FieldValues) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/add-product`,
        data
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Product added successfully");
    },
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const imageObjects = await uploadImages(selectedFiles);
      data.images = imageObjects; 

      data.colors = checkedColors;

      await mutateAsync(data); 

      reset(); 
    } catch (error) {
      console.error("Error uploading images: ", error);
      toast.error("Error uploading images: ")
    } finally {
      setIsLoading(false);
    }

    console.log(data);
  };

  return (
    <>
      <h1 className="text-center font-inter text-2xl font-semibold">
        Add a Product
      </h1>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2"
      >
        <AdminInput
          id="productName"
          label="Product Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <AdminInput
          id="price"
          label="Price"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          type="number"
        />
        <AdminInput
          id="prevPrice"
          label="Previous Price"
          disabled={isLoading}
          register={register}
          errors={errors}
          type="number"
        />
        <AdminInput
          id="discount"
          label="Discount"
          disabled={isLoading}
          register={register}
          errors={errors}
          type="number"
        />

        <TextArea
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <div className="flex justify-between gap-4">
          <CustomCheckbox
            id="inStock"
            register={register}
            label="This product is in stock"
          />

          <CustomCheckbox
            id="isNew"
            register={register}
            label="This is a new product"
          />
          <CustomCheckbox
            id="bestSelling"
            register={register}
            label="Best Selling Products"
          />
        </div>

        <div className="font-medium w-full">
          <div className="mb-2 font-semibold">Select a Category </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
            {categories?.map((item) => {
              if (item.title === "All") {
                return null;
              }

              return (
                <div key={item.title} className="col-span">
                  <CategoryInput
                    onClick={(category) =>
                      setCustomValue("category", category)
                    }
                    selected={category === item.title}
                    label={item.title}
                    icon={item.icon}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className=" w-full flex flex-col flex-wrap gap-4">
          <div>
            <div className="font-bold">Select the available product colors</div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {colors?.map((item, index) => {
              return (
                <SelectColor
                  key={index}
                  item={item}
                  handleChecked={handleChecked}
                 
                />
              );
            })}
          </div>
        </div>

        <div className=" w-full flex flex-col flex-wrap gap-4">
          <div>
            <div className="font-bold">Select the available product sizes</div>
          </div>
          <div className="grid grid-cols-6 gap-3">
            {sizes?.map((item, index) => {
              return (
                <SelectSize
                  key={index}
                  size={item.size}
                  isSelected={selectedSizes.includes(item.size)}
                  onChange={handleSizeChange}
                />
              );
            })}
          </div>
        </div>

        <ImageUpload onFilesSelected={setSelectedFiles} />

        <button
          type="submit"
          className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm font-poppins w-full"
        >
          Add Products
        </button>
      </form>
    </>
  );
};

export default AddProductForm;
