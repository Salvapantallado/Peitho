import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, getFavorites } from "../../actions";
import LoadScreen from "../../components/shared-components/LoadScreen";
import LoadScreenOut from "../../components/shared-components/LoadScreenOut";
import MobileNavbar from "../../components/shared-components/MobileNavbar";
import Navbar from "../../components/shared-components/Navbar";
import Ticker from "../../components/shared-components/Ticker";
import "../../styles/favorites.css";
export default function Favorites() {
  const dispatch = useDispatch();
  const [localFavorites, setLocalFavorites] = useState([]);
  const [loadScreen, setLoadScreen] = useState(false);

  useEffect(() => {
    setLoadScreen(false);
  }, []);

  useEffect(() => {
    if (localStorage !== 0) {
      const localData = JSON.parse(localStorage.getItem("Obj"));
      return setLocalFavorites(localData);
    }
    // if(localStorage.getItem("flag")){
    //   localStorage.removeItem("flag")
    //  } 
    return;
  }, [setLocalFavorites]);

  useEffect(() => {
    dispatch(getFavorites(localFavorites));
  }, [localFavorites]);

  function handleDelete(id) {
    let filteredArray = localFavorites.filter((x) => x.id !== id);
    setLocalFavorites(filteredArray);

    console.log(localFavorites);

    if (localFavorites.length > 1) {
      localStorage.setItem("Obj", JSON.stringify(localFavorites));
    } else {
      localStorage.removeItem("Obj");
    }

    console.log(localFavorites);
  }

  return (
    <div>
      {loadScreen ? <LoadScreenOut /> : <LoadScreen />}
      <Ticker />
      <Navbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
      <MobileNavbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
      <div className="fav-container">
        <div className="fav-list">
          <h1>Lista de favoritos</h1>
          {localFavorites?.map((product, index) => (
            <div
              // to={`/catalogo/${product.id}`}
              key={index}
              className="fav-wrapper"
            >
              <div className="fav-name">
                <h2>{product.name}</h2>
              </div>
              {product.image.length !== 1 ? (
                <div className="fav-image">
                  <img src={product.image[0]} alt="prenda" />
                </div>
              ) : (
                <div className="fav-image">
                  <img src={product.image} alt="prenda" />
                </div>
              )}
              <div className="fav-button">
                <Link to={`/catalogo/${product.id}`}>
                  <button>Ver detalles</button>
                </Link>
              </div>

              <div className="fav-price">
                <h3>$ {product.price}</h3>
              </div>
              <div>
                <button onClick={() => handleDelete(product.id)}>X</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
