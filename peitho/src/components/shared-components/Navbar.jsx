import { useSelector } from "react-redux";
import "../../styles/navbar.css";


export default function Navbar({screenTransition, setScreenTransition}) {
  const NumberOfFavorites = useSelector((state) => state.favoriteProducts);
  console.log(NumberOfFavorites);

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

  // useEffect(() => {
  //   setLoadScreen(false) 
  // }, [])

  return (
    <>
    <nav className="navbar">
      <button onClick={() => LoadCurtain("/")}><h2>Inicio</h2></button>
      <button onClick={() => LoadCurtain("/catalogo")}><h2>Catalogo</h2></button>
      {/* <button onClick={() => LoadCurtain("/favoritos")}><h2>Favoritos</h2></button> */}
      <button onClick={() => LoadCurtain("/")}><h2>Tabla de medidas</h2></button>
      <button onClick={() => LoadCurtain("/telas-disponibles")}><h2>Telas disponibles</h2></button>
      {/* <button onClick={() => LoadCurtain("/admin")}><h2>Admin Add</h2></button> */}
      {/* <NavLink to="/inicio">Cosa 4</NavLink> */}

      <div className="fav-icon">
      <button onClick={() => LoadCurtain("/favoritos")}>
        {NumberOfFavorites !== null && NumberOfFavorites.length >= 1 ? (
          <div className="fav-number">
            <p>{NumberOfFavorites.length}</p>
          </div>
        ) : (
          <div />
          )}

        <img
          src="/ImgHelpers/heart.png"
          alt="favoriteIcon"
          style={{ width: "50px", height: "50px" }}
          />
          </button>
      </div>
    </nav>
    <div className="spot" />
    </>
  );
}
