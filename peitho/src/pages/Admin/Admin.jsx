import { useEffect, useState } from "react";
import Footer from "../../components/shared-components/Footer";
import MobileNavbar from "../../components/shared-components/MobileNavbar";
import Navbar from "../../components/shared-components/Navbar";
import Ticker from "../../components/shared-components/Ticker";
import TransitionIn from "../../components/shared-components/TransitionIn";
import TransitionOut from "../../components/shared-components/TransitionOut";
import EnhancedTable from "./AdminTable2";

export default function Admin() {
  const [isLogged, setIsLogged] = useState(false);
  const [logInInfo, setLogInInfo] = useState({
    user: "",
    password: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("logged")) {
      localStorage.setItem("logged", JSON.stringify(false));
    }
    /* eslint-disable */
    localStorage.getItem("logged") == "true"
      ? /* eslint-disable */
        setIsLogged(true)
      : setIsLogged(false);
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      logInInfo.user === process.env.REACT_APP_USER &&
      logInInfo.password === process.env.REACT_APP_PASSWORD
    ) {
      setIsLogged(true);
      localStorage.setItem("logged", "true");
      alert("Ingresaste!");
    } else {
      alert("Datos incorrectos");
    }
  };

  const handleChange = function (e) {
    setLogInInfo({
      ...logInInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <Ticker />
        <Navbar />
        <MobileNavbar />
        <div className="container">
          {!isLogged && (
            <div
              style={{
                minHeight: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form onSubmit={handleSubmit}>
                <label htmlFor="Usuario">Usuario</label>
                <br />
                <input
                  type="text"
                  name="user"
                  value={logInInfo.user}
                  onChange={handleChange}
                />
                <br />
                <label for="Contraseña">Contraseña</label>
                <br />
                <input
                  type="password"
                  name="password"
                  value={logInInfo.password}
                  onChange={handleChange}
                />
                <br />
                <button type="submit">Ingresar</button>
              </form>
            </div>
          )}
          {isLogged && (
            <EnhancedTable/>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
