import Insta from "../../images/Home/insta.png";
import Icon from "../../images/Home/instagram-icon.png";
import "../../styles/home.css";

export default function Instagram() {
  return (
    <div className="instagram">
      <img src={Insta} alt="Instagram" />
      <a
        href="https://www.instagram.com/peitho.ok/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="icon">
          <span className="text">
            <img src={Icon} alt="insta icon" />
            Seguime en Instagram
          </span>
        </button>
      </a>
    </div>
  );
}
