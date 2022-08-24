import { useSelector } from "react-redux";
import "../../styles/navbar.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

export default function MobileNavbar({ loadScreen, setLoadScreen }) {
  const NumberOfFavorites = useSelector((state) => state.favoriteProducts);
  console.log(NumberOfFavorites);
  const [open, setOpen] = useState(false);

  const LoadCurtain = async (e) => {
    setLoadScreen(!loadScreen);
    setTimeout(() => {
      setLoadScreen(!loadScreen);
      window.location.href = e;
    }, 1500);
  };

  const menuIcon = <MenuRoundedIcon style={{paddingLeft: '5%'}}onClick={() => setOpen(!open)} />;
  const closeIcon = <CloseRoundedIcon onClick={() => setOpen(!open)} />;

  return (
    <nav className="mobile-navbar">
      {menuIcon}
      {open ? (
        <>
          <div className="mobile-buttons">
            <div className="close-icon">
                {closeIcon}
            </div>
            <div className="mobile-links">

            <button onClick={() => LoadCurtain("/")}>
              <h2>Inicio</h2>
            </button>
            <button onClick={() => LoadCurtain("/catalogo")}>
              <h2>Catalogo</h2>
            </button>
            <button onClick={() => LoadCurtain("/admin")}>
              <h2>Admin Add</h2>
            </button>
            </div>
          </div>
        </>
      ) : null}{" "}
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
          />
        </button>
      </div>
    </nav>
  );
}
