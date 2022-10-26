import { useSelector } from "react-redux";
import "../../styles/navbar.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

export default function MobileNavbar({
  screenTransition,
  setScreenTransition,
}) {
  const NumberOfFavorites = useSelector((state) => state.favoriteProducts);
  console.log(NumberOfFavorites);
  const [open, setOpen] = useState(false);

  // useState(() => {
  //   setOpen(false);
  // }, [])

  const LoadCurtain = async (e) => {
    setScreenTransition(!screenTransition);
    setTimeout(() => {
      setOpen(false)
      setScreenTransition(!screenTransition);
      window.location.href = e;
    }, 1500);
  };

  const navbar = document.querySelector(".mobile-navbar");
  const spot = document.querySelector(".spot");

  const handleScroll = (entries) => {
    const spotIsVisible = entries[0].isIntersecting;
    if (spotIsVisible) navbar.classList.remove("fixed-top");
    else navbar.classList.add("fixed-top");
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshhold: 0,
  };

  const observer = new IntersectionObserver(handleScroll, options);
  if (navbar !== null) observer.observe(spot);

  const menuIcon = (
    <MenuRoundedIcon
      style={{ paddingLeft: "5%" }}
      onClick={() => setOpen(true)}
    />
  );
  const closeIcon = <CloseRoundedIcon onClick={() => setOpen(false)} />;

  return (
    <>
      <nav className="mobile-navbar">
        {menuIcon}
        {open ? (
          <div className="sticky-mobile">
            <div className="mobile-buttons opened">
              <div className="close-icon">{closeIcon}</div>
              <div className="mobile-links">
                <button onClick={() => LoadCurtain("/")}>
                  <h2>Inicio</h2>
                </button>
                <button onClick={() => LoadCurtain("/catalogo")}>
                  <h2>Catalogo</h2>
                </button>
                {/* <button onClick={() => LoadCurtain("/admin")}>
                <h2>Admin Add</h2>
              </button> */}
                <button onClick={() => LoadCurtain("/")}>
                  <h2>Tabla de medidas</h2>
                </button>
                <button onClick={() => LoadCurtain("/telas-disponibles")}>
                  <h2>Telas disponibles</h2>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="sticky-mobile">
            <div className="mobile-buttons">
              <div className="close-icon">{closeIcon}</div>
              <div className="mobile-links">
                <button onClick={() => LoadCurtain("/")}>
                  <h2>Inicio</h2>
                </button>
                <button onClick={() => LoadCurtain("/catalogo")}>
                  <h2>Catalogo</h2>
                </button>
                {/* <button onClick={() => LoadCurtain("/admin")}>
            <h2>Admin Add</h2>
          </button> */}
                <button onClick={() => LoadCurtain("/")}>
                  <h2>Tabla de medidas</h2>
                </button>
                <button onClick={() => LoadCurtain("/telas-disponibles")}>
                  <h2>Telas disponibles</h2>
                </button>
              </div>
            </div>
          </div>
        )}{" "}
        <div className="fav-icon">
          <button onClick={() => LoadCurtain("/favoritos")}>
            {NumberOfFavorites !== null && NumberOfFavorites.length >= 1 ? (
              <div className="fav-number">
                <p>{NumberOfFavorites.length}</p>
              </div>
            ) : (
              <div />
            )}

            <img src="/ImgHelpers/heart.png" alt="favoriteIcon" />
          </button>
        </div>
      </nav>
      <div className="spot" />
    </>
  );
}
