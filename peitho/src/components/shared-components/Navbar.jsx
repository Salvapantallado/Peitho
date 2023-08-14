import { useSelector } from "react-redux";
import "../../styles/navbar.css";
import FavSlide from "./FavSlide";
import { useState } from "react";


export default function Navbar({screenTransition, setScreenTransition}) {
  const [openFav, setOpenFav] = useState(false);

  const NumberOfFavorites = useSelector((state) => state.favoriteProducts);

  const LoadCurtain = async(e) => {
    setScreenTransition(!screenTransition)
    setTimeout(() => {
      setScreenTransition(!screenTransition)
      window.location.href = e
    }, 2000)
  }

  const navbar = document.querySelector(".navbar");
  const spot = document.querySelector(".spot");

  const handleScroll = (entries) => {
    const spotIsVisible = entries[0].isIntersecting;
    if(spotIsVisible) navbar.classList.remove("fixed-top");
    else navbar.classList.add("fixed-top");
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshhold: 0,
  }

 
  const observer = new IntersectionObserver(handleScroll, options);
  if(navbar !== null) observer.observe(spot)

  return (
    <>
    <nav className="navbar">
      <button onClick={() => LoadCurtain("/")}><h2>Inicio</h2></button>
      <button onClick={() => LoadCurtain("/catalogo")}><h2>Catalogo</h2></button>
      <button onClick={() => LoadCurtain("/tabla-de-medidas")}><h2>Tabla de medidas</h2></button>
        <FavSlide openFav={openFav} setOpenFav={setOpenFav} LoadCurtain={LoadCurtain} favNumber={NumberOfFavorites} />
    </nav>
    <div className="spot" />
    </>
  );
}
