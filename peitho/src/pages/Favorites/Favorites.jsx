import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getFavorites } from "../../actions";
import Footer from "../../components/shared-components/Footer";
import TransitionIn from "../../components/shared-components/TransitionIn";
import TransitionOut from "../../components/shared-components/TransitionOut";
import MobileNavbar from "../../components/shared-components/MobileNavbar";
import Navbar from "../../components/shared-components/Navbar";
import Ticker from "../../components/shared-components/Ticker";
import "../../styles/favorites.css";
export default function Favorites() {
  const dispatch = useDispatch();
  const [localFavorites, setLocalFavorites] = useState([]);
  const [screenTransition, setScreenTransition] = useState(false);
  const [message, setMessage] = useState("");


  useEffect(() => {
    setScreenTransition(false);
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

  const CopyInfo = (arr) => {
    // console.log(localFavorites, "prueba");
    console.log(arr, "aber");
    if (arr && arr.length === 1) {
      setMessage(`Hola! Me interesa la prenda ${arr[0].name}! :)`);
      navigator.clipboard.writeText(
        `Hola! Me interesa la prenda ${arr[0].name}! :)`
      );
    }
    if (arr && arr.length > 1) {
      const test = arr.map((item) => item.name);
      setMessage(
        `Hola! Me interesan las prendas ${test} que vi en la pagina web`
      );
      navigator.clipboard.writeText(
        `Hola! Me interesan las prendas ${test} que vi en la pagina web`
      );
    }
    return;
  };

  const removeQuantity = (id) => {
    // console.log(x, "sssssss");
    // if (x.quantity === 0) return;
    // const test = x.quantity - 1;
    // newLocalFavorites.map((obj) => ({ ...obj, quantity: test }));
    // return x.quantity--
    setLocalFavorites(cart => 
      cart.map( (item) => 
      id === item.id ? {...item, product_qty: item.product_qty - (item.product_qty > 1 ? 1 : 0) } : item))
  };

  const addQuantity = (id) => {
    // console.log(x, "asdfasdf");
    // const test = x.quantity + 1;
    // newLocalFavorites.map((obj) => ({ ...obj, quantity: test }));
    // return x.quantity++
    setLocalFavorites(cart => 
      cart.map( (item) => 
      id === item.id ? {...item, product_qty: item.product_qty + (item.product_qty < 10 ? 1 : 0) } : item))
  };
  

  return (
    <div>
      {screenTransition ? <TransitionOut /> : <TransitionIn />}
      <Ticker />
      <Navbar
        screenTransition={screenTransition}
        setScreenTransition={setScreenTransition}
      />
      <MobileNavbar
        screenTransition={screenTransition}
        setScreenTransition={setScreenTransition}
      />
      <div className="fav-container">
        <div className="fav-list">
          <h1>Lista de favoritos</h1>
          {localFavorites?.map((product) => (
            <div className="fav-row" key={product.id}>
              <div className="fav-card">
                {product.image.length !== 1 ? (
                  <div className="fav-image">
                    <img src={product.image[0]} alt="prenda" />
                  </div>
                ) : (
                  <div className="fav-image">
                    <img src={product.image} alt="prenda" />
                  </div>
                )}
                <h2>{product.name}</h2>
              </div>

              <div className="fav-card">
                <button onClick={() => removeQuantity(product.id)}>-</button>
                <div>
                  <span>{product.product_qty}</span>
                </div>
                <button onClick={() => addQuantity(product.id)}>+</button>
              </div>

              <div>{product.price * product.product_qty}</div>
              <div>
             <button onClick={() => handleDelete(product.id)}>X</button>
           </div>
            </div>
            // <div
            //   // to={`/catalogo/${product.id}`}
            //   key={index}
            //   className="fav-wrapper"
            // >
            //   <div className="fav-name">
            //     <h2>{product.name}</h2>
            //   </div>
            //   {product.image.length !== 1 ? (
              //     <div className="fav-image">
            //       <img src={product.image[0]} alt="prenda" />
            //     </div>
            //   ) : (
              //     <div className="fav-image">
            //       <img src={product.image} alt="prenda" />
            //     </div>
            //   )}
            //   <div className="fav-button">
            //     <Link to={`/catalogo/${product.id}`}>
            //       <button>Ver detalles</button>
            //     </Link>
            //   </div>

            //   <div className="fav-price">
            //     <h3>$ {product.price}</h3>
            //   </div>
            // </div>
         
            ))}
          <div>
            <button onClick={() => CopyInfo(localFavorites)}>Copiar</button>
            <span>{message}</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
