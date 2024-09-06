
import { formatePrice } from "@/utils/formatePrice";

import {DataGrid, GridColDef} from "@mui/x-data-grid";
import Paper from '@mui/material/Paper';
import Status from "@/components/Status";
import {    MdDone, MdOutlinePending, MdRemoveRedEye } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import ActionBtn from "@/components/ActionBtn";
import { useNavigate } from "react-router-dom";


interface ManageOrderTableProps{
    orders: any;
    
}

const ManageOrderTable: React.FC<ManageOrderTableProps> = ({orders}) => {
    const navigate = useNavigate()
    let rows: any = []

    if(orders){
        rows = orders.map((order: any)=> {
            return {
                id: order.orderId,
                name: order.billingDetails.name,
                price: formatePrice(order.amount),
                payment: order.paymentMethod,
                status: order.status


            }

            
        })
    }

    const columns: GridColDef[] = [
        
            {field: 'id', headerName: "OrderId", width: 220},
            {field: 'name', headerName: "Customer Name", width: 220},
            {field: 'payment', headerName: "Payment Info", width: 220},
            {field: 'price', headerName: "Price(USD)", width: 100, renderCell: (params)=>{
                return <div className="font-bold text-slate-800">{params.row.price}</div>
            } },
           
            
            {field: 'status', headerName: "Status", width: 120, renderCell: (params)=>{
                return <div>{params.row.status === "Approved" ?<Status text={params.row.status}
                icon={MdDone}
               
                color="text-teal-400"
                /> : <>{params.row.status === "Pending" ? <Status text={params.row.status}
                icon={MdOutlinePending}
               
                color="text-orange-500"
                /> : <Status text={params.row.status}
                icon={GrInProgress}
               
                color="text-rose-500"
                />}</>}</div>
            }},
            {field: 'action', headerName: "Actions", width: 200, renderCell: (params)=>{
                return <div className=" mt-2">
                        <ActionBtn icon={MdRemoveRedEye} onClick={()=>{handleEyeIcon(params.row.id)}} />
                </div>
            }},
        
    ]

    const handleEyeIcon = (id: string)=>{
        navigate(`/admin/order-details/${id}`)
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

export default ManageOrderTable;