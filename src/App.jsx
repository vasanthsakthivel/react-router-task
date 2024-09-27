import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import CartPage from './components/CartPage'
import { CartProvider } from './components/CartContext'
const router = createBrowserRouter([
    {
        path: "/",
        element: < Home />,
    },
    {
        path: "/cart",
        element: < CartPage />
    }

])

const App = () => {
    return (
            <CartProvider>
                < RouterProvider router={router} />
            </CartProvider>
            
    )
}

export default App

