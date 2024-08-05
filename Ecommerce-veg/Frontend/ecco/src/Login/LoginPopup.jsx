import { useState } from "react";
import { assets } from "../assets/Images/assets";
import "../components/css/loginpopup.css";

export default function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <from className="login-popup-container">
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
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>
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
      </from>
      l
    </div>
  );
}
