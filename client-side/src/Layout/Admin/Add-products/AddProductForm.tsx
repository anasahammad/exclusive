import AdminInput from "@/components/Admin/AdminInput";
import CategoryInput from "@/components/Admin/CategoryInput";
import SelectColor from "@/components/Admin/SelectColor";
import SelectSize from "@/components/Admin/SelectSize";
import CustomCheckbox from "@/components/shared/CustomCheckbox";
import TextArea from "@/components/shared/TextArea";
import { categories } from "@/utils/categories";
import { colors } from "@/utils/colors";
import { sizes } from "@/utils/sizes";
import { useCallback, useState } from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import ImageUpload from "../ImageUpload";
import { ColorsType } from "@/components/product/ProductDetails";


const AddProductForm = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [checkedColors, setCheckedColors] = useState<string[]>([])
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        control,
        formState: { errors },
      } = useForm<FieldValues>({
        defaultValues: {
          name: "",
          description: "",
          brand: "",
          images: [],
          colors: [],
          sizes: [],
          inStock: false,
          isNew: false,
          category: "",
          price: "",
        },
      });
      const category = watch("category");
      const selectedSizes = watch("sizes") || [];
      
 const handleChecked = (color: string, checked: boolean)=>{
    if(checked){
      setCheckedColors((prev)=> [...prev, color]);
    } else {
      setCheckedColors((prev)=> prev.filter((c)=> c!== color))
    }
 }
      const setCustomValue = (id: string, value: any) => {
        setValue(id, value);
        shouldValidate: true;
        shouldDirty: true;
        shouldTouch: true;
      };

      const handleImageUploadComplete = (urls: string[]) => {
        setValue("images", urls, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      };

    
     
     

      
      const handleSizeChange = (size: string) => {
        if (selectedSizes.includes(size)) {
            setValue("sizes", selectedSizes.filter(s => s !== size), {
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

     
   
    const onSubmit = (data)=>{
        console.log(data)
        const selectedColors = data.colors;

        const selectedColorCodes = selectedColors.map(colorName => {
            const colorObj = colors.find(c => c.color === colorName);
            return colorObj?.colorCode;

            console.log(selectedColorCodes);
        });
  }
    return (
        <>
            <h1 className="text-center font-inter text-2xl font-semibold">Add a Product</h1>

<form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <AdminInput
        id="name"
        label="Name"
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
        id="previous"
        label="Previous Price"
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
                  onClick={(category) => setCustomValue("category", category)}
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
          <div className="font-bold">
            Select the available product colors
          </div>
          
        </div>
        <div className="grid grid-cols-4 gap-3">
          {colors?.map((item, index) => {
            return (
              <SelectColor 
              key={index}
              item={item}
              handleChecked={handleChecked}
              register={register}
             
              
              />
            );
          })}
        </div>
      </div>

      <div className=" w-full flex flex-col flex-wrap gap-4">
        <div>
          <div className="font-bold">
            Select the available product sizes
          </div>
          
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

      <ImageUpload
       onUploadComplete={handleImageUploadComplete}
        />
<button type="submit">Add prodouct</button>
</form>
        </>
    );
};

export default AddProductForm;