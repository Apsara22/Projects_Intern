import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import LoginPopup from "../Login/LoginPopup";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { StoreContext } from "../contex/StoreContext";
import { assets } from "../assets/Images/assets";
import "../components/css/home.css";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <>
      <div
        id="spinner"
        className="w-100 vh-100 bg-white fixed translate-[middle] top-[50] start-[50] flex items-center justify-center"
      >
        <div className="spinner-grow text-primary"></div>
      </div>

      <div className="container-fluid fixed-top ">
        <div className=" topbar bg-[#81c408] d-lg-block ">
          <div className=" flex justify-between  items-center">
            <div className="top-info px-[0.5rem] items-center">
              <small className=" ps-2 top-info">
                <CiLocationOn className=" " />
                <a href="" className="text-white">
                  123 Street, New York
                </a>
              </small>
              <small className="mr-[1 rem] top-info">
                <MdEmail className=" " />
                <a href="" className="text-white">
                  @orgap@gmail.com
                </a>
              </small>
            </div>
            <div className="top-link pe-2 ">
              <a>
                <small className="text-white ml-[0.5 rem]">
                  Privacy Policy /{" "}
                </small>
              </a>
              <a>
                <small className="text-white ml-[0.5 rem]">
                  Terms of Use/{" "}
                </small>
              </a>
              <a>
                <small className="text-white ml-[0.5 rem]">
                  Sales and Refund
                </small>
              </a>
            </div>
          </div>
        </div>

        <div className="container px-0 justify-between top-0 left-0 shadow-md">
          <nav className="navbar bg-white navbar-expand-xl  md:flex md:px-10 px-7">
            <a href="" className="navbar-brand">
              <h1 className="text-primary display-6 pl-32  font-extrabold transition-all">Fruitables</h1>
            </a>

            <button></button>
            <div className="  ">
              <div>
                <IoMdMenu/>
                <IoCloseSharp/>

              </div>
              <ul className=" md:flex md:items-center justify-between">
                <li className="md:ml-8 text-xl">
                  <Link to={"/"} >
                    Home
                  </Link>
                </li>
                <li className="">
                  <Link to={"shop"} >
                    Shop
                  </Link>
                </li>
                <li className="">
                  <Link to={"detial"} >
                    Shopdetials
                  </Link>
                </li>
                <li className="">
                  <Link to={"page"} className=" ">
                    Page
                  <RiArrowDropDownLine />

                  </Link>
                </li>

                <li className="">
                  <Link to={"contact"} >
                    Contact
                  </Link>
                </li>
              
            

            <div className=" flex items-center text-4xl text-primary  md:gap-6  cursor-pointer pl-72">
              <div>
                <IoIosSearch />
              </div>
              <div>
                {getTotalCartAmount() === 0 ? (
                  ""
                ) : (
                  <div className="  text-black bg-red-500 h-4 w-4  rounded-full m-0 p-0 text-base text-center "></div>
                )}

                <Link to={"cart"}>
                  <MdOutlineShoppingCart />
                </Link>
              </div>
              {!token ? (
                <div className="">
                  <CgProfile onClick={() => setShowLogin(true)} />
                  {showLogin ? (
                    <LoginPopup setShowLogin={setShowLogin} />
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <div className="navbar-profile">
                  <img src={assets.profile_icon} alt="" />
                  <ul className="nav-profile-dropdown text-xs">
                    <li>
                      <img src={assets.bag_icon} alt="" />
                      <p>Orders</p>
                    </li>
                    <hr />
                    <li onClick={logout}>
                      <img src={assets.logout_icon} alt="" />
                      <p>Logout</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            </ul>
            </div>
            </nav>
        
        </div>
      </div>
    </>
  );
}
