import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Allcourses from "./components/allcourses"
import Fullstack from "./components/fullstack"
import Datascience from "./components/datascience"
import Cybersecurity from "./components/cybersecurity"
import Career from "./components/career"




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
