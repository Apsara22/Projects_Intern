import Rootlayout from "./Rootlayout";
import Home from "./components/Pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

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
