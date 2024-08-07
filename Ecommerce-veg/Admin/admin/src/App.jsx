import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Add from "./components/pages/Add";
import List from "./components/pages/List";
import Order from "./components/pages/Order";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function App(){
  return(
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
      </div>
    </div>
  )
  
}