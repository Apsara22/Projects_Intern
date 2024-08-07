import "./css/navbar.css"
import {assets} from "../assets/assets"
export default function Navbar() {
  return (
    <div className="navbar">
      <span className="text-bold text-3xl text-[#8ef59f]  flex">Fruitables</span>
      <img className="profile flex" src={assets.profile_image} alt="" />
    </div>
  );
}
