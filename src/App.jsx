import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Allcourses from "./components/Allcourses"
import Fullstack from "./components/Fullstack"
import Datascience from "./components/Datascience"
import Cybersecurity from "./components/Cybersecurity"
import Career from "./components/Career"
import './App.css'





const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        < Navbar/>
        < Outlet/>
      </div>
    ),
    children: [
      {
        path: "/all",
        element: <Allcourses />
      },
      {
        path: "/fullstack",
        element: < Fullstack />
      },
      {
        path: "/datascience",
        element: < Datascience/> 
      },
      {
        path: "/cybersecurity",
        element: < Cybersecurity/>
      },
      {
        path: "/Career",
        element: < Career/>
      }
    ]
  }])



const App = () => {
  return (
    < RouterProvider router={router} />
  )
}

export default App
