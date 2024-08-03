import { useEffect, useState } from "react";
import Icon from "../assets/login.gif";
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { json, Link, useNavigate } from "react-router-dom";
import { Imagebasedo } from "../../utility/Imagebasedo";

export default function Signup() {
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  // const navigate = useNavigate()

  
  

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  console.log(data);
  const handleShowPassword = () => {
    setshowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setConfirmPassword((preve) => !preve);
  };
  const handleOnchanged = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploadProfileImg = async (e) => {
    const data = await Imagebasedo(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  console.log(import.meta.env.REACT_APP_SERVER_DOMAIN);

  useEffect (()=>{
    handleSubmit()
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = data;

    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${import.meta.env.REACT_APP_SERVER_DOMAIN}/signup`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body:
             JSON.stringify(data)
             }
      );
        const dataRes = await fetchData.json();

        console.log(dataRes);
        let datas = JSON.stringify(data)
        console.log(datas)

        alert("sucessfull");
        // navigate("/login")
      } else {
        alert("password and confirm password is not match");
      }
    } else {
      alert("Please Enter required fields");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm flex  flex-col p-4 bg-white m-auto ">
        {/* <h1 className="text-center text-2xl font-bold">
                    Sign Up
                </h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img src={data.image ? data.image : Icon} className="w-full h-full" />

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-20 w-full text-center cursor-pointer">
              <p className="">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              accept="image/"
              className="hidden"
              onChange={handleUploadProfileImg}
            />
          </label>
        </div>
        <form
          action=""
          className="w-full py-3 flex flex-col"
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 "
            value={data.firstName}
            onChange={handleOnchanged}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnchanged}
          />

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

          <label htmlFor="confirmPassword"> Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className=" w-full bg-slate-200 outline-none border-none"
              value={data.confirmPassword}
              onChange={handleOnchanged}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {" "}
              {showPassword ? <BiShow /> : <BiSolidHide />}
            </span>
          </div>

          <button
            type="submit"
            className="max-w-[150px]  m-auto w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-xl font-medium  text-center py-1 rounded-full mt-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have Account?{" "}
          <Link to={"/login"} className="text-blue-500 underline">
            login
          </Link>
        </p>
      </div>
    </div>
  );
}
