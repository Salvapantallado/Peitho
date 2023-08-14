import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "../../styles/navbar.css";

export default function MenuSlide({open, setOpen, LoadCurtain}) {

    const menuIcon = (
        <MenuRoundedIcon
          style={{ paddingLeft: "5%" }}
          onClick={() => setOpen(true)}
        />
      );
      const closeIcon = <CloseRoundedIcon onClick={() => setOpen(false)} />;


    return(
        <>
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
                <button onClick={() => LoadCurtain("/tabla-de-medidas")}>
                  <h2>Tabla de medidas</h2>
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
                <button onClick={() => LoadCurtain("/tabla-de-medidas")}>
                  <h2>Tabla de medidas</h2>
                </button>
              </div>
            </div>
          </div>
        )}
        </>
    )
}