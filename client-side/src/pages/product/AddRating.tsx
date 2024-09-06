import AdminInput from "@/components/Admin/AdminInput";
import { ProductType } from "@/components/product/ProductDetails";
import TopContent from "@/components/shared/TopContent";
import { Rating } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { User } from "firebase/auth";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface AddRatingProps{
    product: ProductType,
    user: User,
    refetch : ()=> void
}

type RatingData = {
    comment: string;
    rating: number;
    userId: string;
    productId: string;
  };
const AddRating: React.FC<AddRatingProps> = ({product, user, refetch}) => {
    const navigate = useNavigate()
    const {register, handleSubmit, setValue, reset, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            comment: "",
            rating: 0
        },
    })

    const setCustomValue = (id: string, value: any)=>{
        setValue(id, value, {
            shouldTouch: true,
            shouldDirty: true,
            shouldValidate: true
        })
    }

    const {mutateAsync} = useMutation({
        mutationFn: async (ratingData: RatingData)=>{
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/add-review`, ratingData)
            return res.data;
        },
        onSuccess: ()=>{
            toast.success("Review Added Successfully")
        },
        onError: (error: any)=>{
            toast.error(error.response?.data?.message || "Something went wrong")
        }
        
    })
    const onSubmit: SubmitHandler<FieldValues> = async (data)=>{
        console.log(data)
        if(!user){
            toast.error("You have to login first")
            navigate("/login")
            return
        }

        if(data.rating === 0){
            return toast.error("Please Select at least one rating")
        }

        const ratingData = {
           comment: data.comment,
           rating: data.rating,
           userId: user?.uid as string,
           productId: product._id as string,
           user: {
            name: user.displayName,
            email: user?.email,
            image: user?.photoURL
           }
        }

       try {
        await mutateAsync(ratingData)
        reset()
        refetch()
       } catch (error) {
        console.log(error)
       }

    }


    return (
        <div className="flex flex-col gap-2 max-w-[500px] ">
            <TopContent text="Rate This Product"/>
            <Rating onChange={(event, newValue)=>{
                setCustomValue('rating', newValue)
            }}/>

            {/* <AdminInput id="comment" label="comment" register={register} errors={errors} required={true}/> */}
            <input {...register("comment")} type="text" className="border-[1.5px] border-[#00000066] py-3 pl-6 pr-[164px] rounded-sm" placeholder="Comment" />
            <button  onClick={handleSubmit(onSubmit)} className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm">Add Comment</button>
        </div>
    );
};

export default AddRating;