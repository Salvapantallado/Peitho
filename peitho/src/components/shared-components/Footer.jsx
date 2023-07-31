import "../../styles/footer.css";
import Logo from "../../images/Navbar/logo.jpg";
import InstaIcon from "../../images/Instagram.png";


export default function Footer() {
  return (
    <div className="footer">
      <div>
        <img
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          src={Logo}
          alt="footer logo"
        />
      </div>
      <div className="quick-links">
        <div>
          <ul>
            <h1>Enlaces rápidos</h1>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/catalogo">Catalogo</a>
            </li>
            <li>
              <a href="/tabla-de-medidas">Tablas de Medidas</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Redes sociales</h1>
          <p>Seguime en Instagram</p>
          <p><a target="_blank" rel="noreferrer" style={{fontFamily: "Unifrakturcook", color: "slateblue"}} href="https://www.instagram.com/peitho.ok/"><img style={{width: "16px", height: "16px"}} src={InstaIcon} alt="instaicon"/>Peitho Diseños</a></p>
        </div>
      </div>
    </div>
  );
}
