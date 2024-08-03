import { useState } from "react"
import { assets } from "../assets/Images/assets"

export default function LoginPopup({setShowLogin}){
    const [currentState, setCurrentState] = useState("Signup")
    return (
        <div className="login-popup">
            <from className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() =>setShowLogin(false) } src={assets.cross_icon} alt="" />

                </div>
                <div className="login-popup-inputs">

                </div>
            </from>
l
        </div>
    )
}