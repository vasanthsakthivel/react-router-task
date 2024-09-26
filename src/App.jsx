import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/cart'
const router = createBrowserRouter([
    {
        path: "/",
        element: < Home />,
    },
    {
        path: "/cart",
        element: < Cart />
    }

])

const App = () => {
    return (
        <div>
            < RouterProvider router={router} />
        </div>
    )
}

export default App

