import "../../styles/homeProducts.css";
import NewestProduct from "./NewestProduct";
import Popular from "./Popular";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllStories } from "../../actions";
import { useEffect } from "react";
import VideoSwiper from "./VideoSwiper";

export default function HomeProducts() {
	const dispatch = useDispatch();
	const allProducts = useSelector((state) => state.allProducts);
	const allStories = useSelector((state) => state.allStories);
	

	useEffect(() => {
		dispatch(getAllProducts())
		dispatch(getAllStories())
	}, [dispatch]);
  
	return (
		<div className="homeproducts-container">
			<div className="home-products">
				<NewestProduct allProducts={allProducts}/>
				<Popular allProducts={allProducts}/>
			</div>
			<VideoSwiper allStories={allStories}/>
		</div>
	);
}
