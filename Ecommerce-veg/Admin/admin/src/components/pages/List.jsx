import { useEffect, useState } from "react";
import "../css/list.css";
import axios from "axios";
import { toast } from "react-toastify";
export default function List() {
  const [list, setList] = useState([]);

  //Add food list
  const fetchList = async () => {
    const response = await axios.get(`http://localhost:8000/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  //remove food list
  const removeFood = async(foodId) =>{ 
    const response = await axios.post(`http://localhost:8000/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }

  }
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Acion</b>
        </div>
        {list.map((item, index)=>{
            return(
                <div key={index} className="list-table-format">
                    <img src={`http://localhost:8000/images/`+item.image}/>
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                    <p onClick={() => removeFood(item._id)} className="cursor">X</p>

                </div>
            )
        })}
      </div>
    </div>
  );
}