import "../../styles/homeProducts.css";

import Cute1 from "../../images/Home/PeithoCute/Cute-1.jpeg";
import Cute2 from "../../images/Home/PeithoCute/Cute-2.jpeg";
import Cute3 from "../../images/Home/PeithoCute/Cute-3.jpeg";
import Cute4 from "../../images/Home/PeithoCute/Cute-4.jpeg";
import Cute5 from "../../images/Home/PeithoCute/Cute-5.jpeg";
import Cute6 from "../../images/Home/PeithoCute/Cute-6.jpeg";
import { Link } from "react-router-dom";

export default function HomeProducts() {
	return (
		<div>
			<div className="home-products">
				<img src={Cute1} alt="Primer foto" />

				<img src={Cute2} alt="Segunda foto" />

				<img src={Cute3} alt="Tercer foto" />

				<img src={Cute4} alt="Cuarta foto" />

				<img src={Cute5} alt="Quinta foto" />

				<img src={Cute6} alt="Sexta foto" />
			</div>
			<div className="product-button">
				<Link to="/catalogo">
					<button>Ver todos los productos</button>
				</Link>
			</div>
		</div>
	);
}
