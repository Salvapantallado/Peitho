import "./App.css";
import Store from "./store";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog/Catalog";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LandingPage from "./pages/Landing/Landing";
import DetailCard from "./components/catalog-components/DetailCard";
import Favorites from "./pages/Favorites/Favorites";
import AddProduct from "./pages/Admin/AddProduct";
import { createBrowserHistory } from "history";
import Admin from "./pages/Admin/Admin";
import EditProduct from "./pages/Admin/EditProduct";
import { useState } from "react";
import AvailableCloth from "./pages/Cloth/AvailableCloth";

function App() {
	const history = createBrowserHistory();
	const [flag, setFlag] = useState("")
	console.log(flag);
	return (
		<Provider store={Store}>
			<Router history={history}>
				{/* <Navbar />
			<CategoryBubble /> */}
				<Routes>
					<Route exact path="/" element={<Home flag={flag} setFlag={setFlag} />} />
					<Route exact path="/catalogo" element={<Catalog flag={flag} setFlag={setFlag} />} />
					<Route exact path="/catalogo/:id" element={<DetailCard />} />
					<Route exact path="/telas-disponibles" element={<AvailableCloth/>} />
					<Route exact path="/favoritos" element={<Favorites/>} />
					<Route exact path="/admin" element={<Admin/>} />
					<Route exact path="/admin/editar/:id" element={<EditProduct/>} />
					<Route exact path="/admin/agregar" element={<AddProduct/>} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
