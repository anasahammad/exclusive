import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface OrderStatusFormProps {
  orderId: string,
  status: string,
  deliveryStatus: string
}

const OrderStatusForm: React.FC<OrderStatusFormProps> = ({ orderId, status, deliveryStatus }) => {

  const [newStatus, setNewStatus] = useState(status);
  const [newDeliveryStatus, setNewDeliveryStatus] = useState(deliveryStatus);

 
  // Mutation to update the order status
  const { mutateAsync } = useMutation({
    mutationFn: async ({ newStatus, newDeliveryStatus }: { newStatus: string; newDeliveryStatus: string }) => {
      const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/update-status`, {
        newStatus: newStatus,
        newDeliveryStatus : newDeliveryStatus,
        orderId: orderId,
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success('Order status updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Error updating order status');
    },
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateAsync({
      newStatus: newStatus,
      newDeliveryStatus: deliveryStatus,
    });
  };

  return (
    <div className="my-4 mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Status Orders</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Order ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Order ID</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-purple-500 focus:ring-purple-500"
            value={orderId}
            disabled
          />
        </div>

        {/* Order Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Order Status</label>
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>

        {/* Order Transaction */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Order Transaction</label>
          <select
            value={newDeliveryStatus}
            onChange={(e) => setNewDeliveryStatus(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderStatusForm;
