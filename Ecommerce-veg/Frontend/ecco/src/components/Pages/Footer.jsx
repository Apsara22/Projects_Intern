import { assets } from "../../assets/Images/assets";
import "../css/footer.css"

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <span className="text-bold text-3xl text-[#8ef59f] pl-9">
            Fruitables
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            accusamus odio ullam molestias nam praesentium eius ipsa mollitia
            provident, quis cum atque error voluptatum illum asperiores cumque
            recusandae eum. Aliquid.
          </p>
          <div className="footer-social-icons flex">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2 className="text-2xl">COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2 className="text-2xl">GET IN TOUCH</h2>
          <ul>
            <li>+977 98765433876</li>
            <li>fruitables831@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright"> Copyright202 @ Fruitables.com -All Right Reserved</p>
    </div>
  );
}
