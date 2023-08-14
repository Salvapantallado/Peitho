import "../../styles/load-screen.css";
import PeithoGamma from "../../images/Videos/PeithoGamma.mp4";

export default function HomeLoad() {
  return (
    <div className="sticky">
        <div className="aux">

      <div className="HomeLoad">
        <video autoPlay muted preload>
          <source src={PeithoGamma} type="video/mp4" />
        </video>
      </div>
        </div>
    </div>
  );
}
