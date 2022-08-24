import "../../styles/load-screen.css"
import PeithoGamma from "../../images/Videos/PeithoGamma.mp4"

export default function LoadScreen() {
    return(
        <div className="LoadScreen">
            <video autoPlay muted>
                <source src={PeithoGamma} type="video/mp4" />
            </video>
        </div>
    )
}