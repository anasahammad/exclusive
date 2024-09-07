import { ProductType } from "@/components/product/ProductDetails";
import { formatePrice } from "@/utils/formatePrice";

import {DataGrid, GridColDef} from "@mui/x-data-grid";
import Paper from '@mui/material/Paper';
import Status from "@/components/Status";
import { MdCached, MdClose, MdDelete, MdDone, MdRemoveRedEye } from "react-icons/md";
import ActionBtn from "@/components/ActionBtn";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
interface ManageProductsTableProps{
    products: ProductType[],
    refetch: ()=> void
}
const ManageProductsTable: React.FC<ManageProductsTableProps> = ({products, refetch}) => {
    const navigate = useNavigate()
    let rows: any = []

    if(products){
        rows = products.map((product)=> {
            return {
                id: product._id,
                name: product.productName,
                price: formatePrice(product.price),
                category: product.category,
                inStock: product.inStock,
                brand: product.brand


            }

            
        })
    }

    const columns: GridColDef[] = [
        
            {field: 'id', headerName: "ID", width: 220},
            {field: 'name', headerName: "Name", width: 220},
            {field: 'price', headerName: "Price(USD)", width: 100, renderCell: (params)=>{
                return <div className="font-bold text-slate-800">{params.row.price}</div>
            } },
            {field: 'category', headerName: "Category", width: 100},
            {field: 'brand', headerName: "Brand", width: 100},
            {field: 'inStock', headerName: "InStock", width: 120, renderCell: (params)=>{
                return <div>{params.row.inStock === true ? <Status text="in stock"
                icon={MdDone}
               
                color="text-teal-400"
                /> : <Status text="out of stock"
                icon={MdClose}
               
                color="text-rose-500"
                />}</div>
            }},
            {field: 'action', headerName: "Actions", width: 200, renderCell: (params)=>{
                return <div className="flex justify-between gap-4 w-full">
                        <ActionBtn icon={MdCached} onClick={()=>{handleStockToggle(params.row.id)}} />
                        <ActionBtn icon={MdDelete} onClick={()=>{handleDelete(params.row.id)}} />
                        <ActionBtn icon={MdRemoveRedEye} onClick={()=>{handleEyeIcon(params.row.id)}} />
                </div>
            }},
        
    ]

    const handleEyeIcon = (id: string)=>{
        navigate(`/details/${id}`)
    }

    const {mutateAsync} = useMutation({
        mutationFn: async(id:string)=>{
            const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/delete-product/${id}`, {withCredentials: true})
            return response.data;
        },
        onSuccess: ()=>{
            console.log("successfully deleted the item")
            toast.success("Successfully deleted the product")
            refetch()
        },
        onError: (error)=>{
            console.log(error)
            toast.error(error.message)
        }
    })
    const handleDelete =async (id: string)=>{
        await mutateAsync(id)
    }

    const handleStockToggle = (id: string)=>{
        axios.put(`${import.meta.env.VITE_BASE_URL}/update-inStock`, {id}, {withCredentials: true}).then((res)=>{
            toast.success("The status changes")
            console.log(res)
            refetch()
        }).catch(error=>{
            toast.error(error.message)
        })
    }
    return (
        <div>
          
          <Paper sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel : {page: 0, pageSize: 5 }} }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ border: 0 }}
      />
   </Paper>

        </div>
    );
};

export default ManageProductsTable;