import Rootlayout from "./Rootlayout";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import PlaceOrder from "./components/Pages/PlaceOrder";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Rootlayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart/>,
        },
        {
          path: "order",
          element: <PlaceOrder/>,
        },
       
      ],
    },
  ]);

  return (
    <>
    
      <RouterProvider router={router} />
    </>
  );
}
export default App;
