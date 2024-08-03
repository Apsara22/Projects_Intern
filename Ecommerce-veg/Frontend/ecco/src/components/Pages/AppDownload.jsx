import { assets } from "../../assets/Images/assets";
import "../css/appdownload.css";

export default function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better Experience Download <br /> Fruitables
      </p>
      <div className="app-download-platfrom">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}
