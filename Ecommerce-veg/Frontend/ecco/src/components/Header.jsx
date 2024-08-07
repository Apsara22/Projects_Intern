import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import LoginPopup from "../Login/LoginPopup";
import { StoreContext } from "../contex/StoreContext";
import { assets } from "../assets/Images/assets";
import "../components/css/home.css";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  

  }

  return (
    <header>
      <div className="bg-[#95f7a5] h-12 rounded-1xl w-full rounded-1xl  ">
        <div className=" flex items-center pl-4 text-white text-[15px] space-x-4 cursor-pointer">
          <CiLocationOn className="h-12 w-8 " />

          <span>123 Street, New York</span>
          <MdEmail className="h-12 w-8 " />

          <span>@orgap@gmail.com</span>

          <span className="pl-[1123px]">
            Privacy Policy / Terms of Use / Sales and Refdunds
          </span>
        </div>
      </div>
      <div className="bg-slate-50 h-14 w-full px-2 md:px-4 flex justify-between z-50 bg-white">
        <span className="text-bold text-3xl text-[#8ef59f] pl-9">
          Fruitables
        </span>

        <div className=" flex items-center gap-4 md:gap-7 cursor-pointer ">
          <nav className=" flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={"/"} className="text-[#8ef59f]">
              Home
            </Link>
            <Link to={"shop"}>Shop</Link>
            <Link to={"detial"}>Shop Detials</Link>
            <Link to={"page"}>Page</Link>
            <RiArrowDropDownLine />
            <Link to={"contact"}>Contact</Link>
          </nav>
        </div>

        <div className=" flex items-center text-4xl text-[#8ef59f]  md:gap-6  cursor-pointer">
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
              {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
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
      </div>
    </header>
  );
}
