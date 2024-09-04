import React from 'react'
import ReactDOM from 'react-dom/client'
import {Toaster} from "react-hot-toast"
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/router.tsx'
import CartProvider from './Provider/CartProvider.tsx'
import AuthProvider from './Provider/AuthProvider.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider  client={queryClient}>

    <Toaster
  position="top-center"
  reverseOrder={false}
/>
   <AuthProvider>
   <CartProvider>
   <RouterProvider router={router} />
   </CartProvider>
   </AuthProvider>
   </QueryClientProvider>
  </React.StrictMode>,
)
