import "./App.css";
import Store from "./store";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog/Catalog";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailCard from "./components/catalog-components/DetailCard";
import Favorites from "./pages/Favorites/Favorites";
import AddProduct from "./pages/Admin/AddProduct";
import { createBrowserHistory } from "history";
import Admin from "./pages/Admin/Admin";
import EditProduct from "./pages/Admin/EditProduct";
import { useState } from "react";
import AvailableCloth from "./pages/Cloth/AvailableCloth";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	const history = createBrowserHistory();
	const [flag, setFlag] = useState("")
	const [screenTransition, setScreenTransition] = useState(false);
	return (
		<Provider store={Store}>
			<Router history={history}>
			<ScrollToTop />
				<Routes>
					<Route exact path="/" element={<Home flag={flag} setFlag={setFlag} screenTransition={screenTransition} setScreenTransition={setScreenTransition}/>} />
					<Route exact path="/catalogo" element={<Catalog flag={flag} setFlag={setFlag} screenTransition={screenTransition} setScreenTransition={setScreenTransition}/>} />
					<Route exact path="/catalogo/:id" element={<DetailCard screenTransition={screenTransition} setScreenTransition={setScreenTransition}/>} />
					<Route exact path="/telas-disponibles" element={<AvailableCloth screenTransition={screenTransition} setScreenTransition={setScreenTransition}/>}/>
					<Route exact path="/favoritos" element={<Favorites screenTransition={screenTransition} setScreenTransition={setScreenTransition}/>}/>
					<Route exact path="/admin" element={<Admin screenTransition={screenTransition} setScreenTransition={setScreenTransition}/>}/>
					<Route exact path="/admin/editar/:id" element={<EditProduct/>} />
					<Route exact path="/admin/agregar" element={<AddProduct/>} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
