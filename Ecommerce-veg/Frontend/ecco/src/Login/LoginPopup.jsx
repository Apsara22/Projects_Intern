import { useContext, useState } from "react";
import { assets } from "../assets/Images/assets";
import "../components/css/loginpopup.css";
import { StoreContext } from "../contex/StoreContext";

import axios from "axios"


export default function LoginPopup({ setShowLogin }) {
const {url,setToken} = useContext(StoreContext)
// const { setToken} = useContext(StoreContext)
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })
 const onChangeHandler = (event) =>{
  const name  = event.target.name;
  const value = event.target.value;
  setData(data => ({...data,[name]: value}))
 }

 const onLogin = async (event) =>{
  event.preventDefault();
  let newUrl = url;
  if(currentState ==="Login"){
    newUrl += "/api/user/login"
  }
  else{
    newUrl += "/api/user/register"
  }
  const response = await axios.post(newUrl, data);
  if(response.data.success){
    setToken(response.data.token);
    localStorage.setItem("token", response.data.token);
    setShowLogin(false)

  }
  else{
    alert(response.data.message)

  }
  }
 

 
 
  return (
    <div className="login-popup">

      <form onSubmit={onLogin} className="login-popup-container">

        <div className="login-popup-title">
          <h2 className="text-2xl">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="Your Name" required />
          )}
          <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Your Email" required />
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Your Password" required />
        </div>
        <button type="submit">
          {currentState === "Signup" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By countinuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account ?{" "}
            <span onClick={() => setCurrentState("Signup")}> Click here</span>
          </p>
        ) : (
          <p>
            Already Have an Account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}

      </form>
    </div>

      
  );
}
