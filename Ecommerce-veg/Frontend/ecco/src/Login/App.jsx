import Rootlayout from "./Rootlayout";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import PlaceOrder from "./components/Pages/PlaceOrder";
import Verify from "./components/Pages/Verify";
import MyOrder from "./components/Pages/MyOrder";
import Shop from "./components/Pages/Shop";
import ShopDetials from "./components/Pages/Shopdetials";

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
        {
          path: "verify",
          element: <Verify/>,
        },
        {
          path: "/myorders",
          element: <MyOrder/>,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/detial",
          element: <ShopDetials/>,
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
