import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/router.tsx'
import CartProvider from './Provider/CartProvider.tsx'
import AuthProvider from './Provider/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <AuthProvider>
   <CartProvider>
   <RouterProvider router={router} />
   </CartProvider>
   </AuthProvider>
    
  </React.StrictMode>,
)
