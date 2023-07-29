import "../../styles/footer.css";
import Logo from "../../images/Navbar/logo.jpg";

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
              <a href="/favoritos">Favoritos</a>
            </li>
            <li>
              <a href="/">Etcetera</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Redes sociales</h1>
          <p>Seguime en Instagram</p>
        </div>
      </div>
    </div>
  );
}
