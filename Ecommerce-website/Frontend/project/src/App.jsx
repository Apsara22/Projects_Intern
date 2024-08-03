import Rootlayout from "./Rootlayout";
import Home from "./components/Pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Shop from "./components/Pages/Shop";
import Detials from "./components/Pages/Detials";
import Contact from "./components/Pages/Contact";
import Page from "./components/Pages/Page";
import Login from "./components/Pages/Login";
import NewProduct from "./components/NewProduct";
import Signup from "./components/Pages/Signup";
function App(){
  const router = createBrowserRouter([
    {
      path: "",
      element: <Rootlayout/>,
      children:[
        {
          path: "/",
          element: <Home/>
            },
            {
              path: "shop",
              element: <Shop/>
                },
                {
                  path: "detial",
                  element: <Detials/>
                    },
                    {
                      path: "page",
                      element: <Page/>
                        },
                        {
                          path: "contact",
                          element: <Contact/>
                            },
                            {
                              path: "login",
                              element: <Login/>
                                },
                                {
                                  path: "newproduct",
                                  element: <NewProduct/>
                                    },
                                    {
                                      path: "signup",
                                      element: <Signup/>
                                        },
                                        
            
           
              ] } ])
               
   
 
  return(
    <>
     <RouterProvider router={router} />
    </>
  );

}
export default App