import { useSelector } from "react-redux";
import "../../styles/navbar.css";


export default function Navbar({loadScreen, setLoadScreen}) {
  const NumberOfFavorites = useSelector((state) => state.favoriteProducts);
  console.log(NumberOfFavorites);

  const LoadCurtain = async(e) => {
    setLoadScreen(!loadScreen)
    setTimeout(() => {
      setLoadScreen(!loadScreen)
      window.location.href = e
    }, 100)
  }

  // useEffect(() => {
  //   setLoadScreen(false)
  // }, [])

  return (
    <nav className="navbar">
      <button onClick={() => LoadCurtain("/")}><h2>Inicio</h2></button>
      <button onClick={() => LoadCurtain("/catalogo")}><h2>Catalogo</h2></button>
      {/* <button onClick={() => LoadCurtain("/favoritos")}><h2>Favoritos</h2></button> */}
      <button onClick={() => LoadCurtain("/")}><h2>Tabla de medidas</h2></button>
      <button onClick={() => LoadCurtain("/telas-disponibles")}><h2>Telas disponibles</h2></button>
      <button onClick={() => LoadCurtain("/admin")}><h2>Admin Add</h2></button>
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
  );
}
