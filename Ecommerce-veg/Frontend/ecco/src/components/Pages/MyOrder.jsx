import { useEffect, useState } from "react";
import "../css/myorder.css";
import { useContext } from "react";
import { StoreContext } from "../../contex/StoreContext";
import axios from "axios";


export default function MyOrder() {
  const {url,token} = useContext(StoreContext);

  const [data, setData] = useState([]);
  const fetchOrders = async () => {
    const response = await axios(url+"/api/order/userorders",{},{headers:{token}}
    );
    setData(response.data.data)
  };
  useEffect(()=>{
    if(token){
        fetchOrders();
    }
  },[])
  return(
    <div className="my-orders">
      <h2>My Orders</h2>
      {data.map((order,index) =>{
        return(
        <div key={index} className="my-order-order">

        </div>
        )
      })}

    </div>
  )
}
