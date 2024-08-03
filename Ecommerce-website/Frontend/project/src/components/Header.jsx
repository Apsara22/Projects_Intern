import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function Header(){

    const [showMenu, setShowMenu] = useState(false) 
    const handleShowMenu = () =>{
        setShowMenu( preve => !preve)
    }
    return(
        <header>
            <div className="bg-[#95f7a5] h-12 rounded-1xl w-full rounded-1xl  ">
                <div className=" flex items-center pl-4 text-white text-[15px] space-x-4 cursor-pointer">
                <CiLocationOn className="h-12 w-8 "/>

                <span>
                    123 Street, New York
                </span>
                <MdEmail className="h-12 w-8 "/>

                <span>
                    @orgap@gmail.com
                </span>

                <span className="pl-[1123px]">
                Privacy Policy / Terms of Use / Sales and Refdunds

                </span>
                </div>
                </div>
                <div className="bg-slate-50 h-14 w-full px-2 md:px-4 flex justify-between z-50 bg-white">

                    <span className="text-bold text-3xl text-[#8ef59f] pl-9">Fruitables</span>

                    <div className=" flex items-center gap-4 md:gap-7 cursor-pointer ">
                    <nav className=" flex gap-4 md:gap-6 text-base md:text-lg">
                        <Link to={"/"} className="text-[#8ef59f]">Home</Link>
                        <Link to={"shop"}>Shop</Link>
                        <Link to={"detial"}>Shop Detials</Link>
                        <Link to={"page"}>Page</Link>
                        <RiArrowDropDownLine/>
                        <Link to={"contact"}>Contact</Link>

                    </nav>
                    </div>

                    <div className=" flex items-center text-4xl text-[#8ef59f] gap-4 md:gap-6  cursor-pointer">
                        <div><IoIosSearch/></div>
                        <div>
                        <div className="absolute  text-black bg-red-500 h-4 w-4  rounded-full m-0 p-0 text-base text-center ">
                            0
                        </div>
                        <MdOutlineShoppingCart/>
                        
                        </div>
                        <div><CgProfile onClick={handleShowMenu}/>
                        { showMenu &&(
                            <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                            <Link to={"newproduct"} className="text-xl text-black cursor-pointer">New Product</Link>
                            <Link to={"login"} className="text-xl text-black cursor-pointer">Login</Link>
                        </div>
                        )}
                        </div>
                        
                        </div>
                        
                   

                   
                    


                </div>
        </header>
        
        
    )
}