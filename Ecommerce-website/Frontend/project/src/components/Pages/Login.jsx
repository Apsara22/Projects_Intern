import { useState } from "react";
import Icon from "../assets/login.gif";
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { Link} from "react-router-dom";

export default function Login() {
  const [showPassword, setshowPassword] = useState(false);

  const [data, setData] = useState({
    
    email: "",
    password: "",
  });
console.log(data)
  const handleShowPassword = () => {
    setshowPassword((preve) => !preve);
  };
  
  const handleOnchanged = (e) =>{
    const {name, value} = e.target
    setData( (preve) =>{
      return{
        ...preve,
        [name] : value
      }
    })

  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const {email, password} = data

    if( email && password ) {
        alert("sucessfull")
      }
      

  else{
    alert("Please Enter required fields")
  }
}

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm flex  flex-col p-4 bg-white m-auto ">
        {/* <h1 className="text-center text-2xl font-bold">
                    Sign Up
                </h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={Icon} />
        </div>
        <form action="" className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          
          <label htmlFor="Email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 "
            value={data.email}
            onChange={handleOnchanged}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 outline-none border-none"
              value={data.password}
              onChange={handleOnchanged}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {" "}
              {showPassword ? <BiShow /> : <BiSolidHide />}
            </span>
          </div>

          <button type="submit" className="max-w-[150px]  m-auto w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-xl font-medium  text-center py-1 rounded-full mt-4">
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Don't have Account?{" "}
          <Link to={"/signup"} className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
