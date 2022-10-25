import "../../styles/homeProducts.css";
import NewestProduct from "./NewestProduct";
import Popular from "./Popular";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions";
import { useEffect } from "react";
import ChooseYourStyle from "./ChooseStyle";
import Maniqui from "./maniqui.png";

export default function HomeProducts() {
	const dispatch = useDispatch();
	const allProducts = useSelector((state) => state.allProducts);

	useEffect(() => {
	  dispatch(getAllProducts());
	}, [dispatch]);
  
	return (
		<div className="homeproducts-container">
			<div className="home-products">
				<NewestProduct allProducts={allProducts}/>
				<Popular allProducts={allProducts}/>
			</div>
			<div className="product-button">
				<Link to="/catalogo">
					<button>Ver todos los productos</button>
				</Link>
			</div>
			<ChooseYourStyle/>
		</div>
	);
}
