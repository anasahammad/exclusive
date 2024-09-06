
import { formatePrice } from "@/utils/formatePrice";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface OrderSummaryProps{
  order: any;
}
const OrderSummary: React.FC<OrderSummaryProps> = ({ order}) => {

    return (
        <div>
            <TableContainer component={Paper} className="shadow-md rounded-lg">
      <Table>
        <TableHead className="bg-gray-100">
          <TableRow>
            <TableCell className="font-bold">Product Image</TableCell>
            <TableCell className="font-bold">Product Name</TableCell>
            <TableCell className="font-bold">Quantity</TableCell>
            <TableCell className="font-bold">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {order.products.map((product: any) => (
            <TableRow key={product._id}>
              <TableCell>
                <img src={product.image} alt={product.productName} className="w-12 h-12 object-cover" />
              </TableCell>
              <TableCell>
                <span className="block">{product.productName}</span>
               
              </TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{formatePrice(product.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} className="text-right font-bold">Subtotal Price:</TableCell>
            <TableCell> {formatePrice(order.amount)}</TableCell>
          </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default OrderSummary;