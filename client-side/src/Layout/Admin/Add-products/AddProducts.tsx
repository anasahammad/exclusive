import FormWrap from "@/components/shared/FormWrap";
import AddProductForm from "./AddProductForm";


const AddProducts = () => {
    return (
        <div className="p-8">
           <div className="">
            <FormWrap>
                <AddProductForm/>
            </FormWrap>

           </div>
        </div>
    );
};

export default AddProducts;