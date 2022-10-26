import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
  const [deletedItem, setDeletedItem] = useState({});

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
    let filteredItem = localFavorites.filter((x) => x.id === id);
    setDeletedItem(filteredItem);
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

  function restoreItem() {
    if (deletedItem.length > 0) {
      const auxArr = [];
      auxArr.push(...localFavorites, deletedItem[0])
      console.log(auxArr);
      auxArr.sort((a, b) => a.id - b.id);
      setLocalFavorites(auxArr)
      setDeletedItem({});
      return;
    }
  }

  const CopyInfo = (arr) => {
    const productQuantities = arr.map((item) => item.product_qty);
    if (arr && arr.length === 1) {
      setMessage(`Hola! Me interesa la prenda ${arr[0].name}(${productQuantities})! :)`);
      navigator.clipboard.writeText(
        `Hola! Me interesa la prenda ${arr[0].name}(${productQuantities})! :)`
      );
    }
    if (arr && arr.length > 1) {
      const productNames = arr.map((item) => item.name + `(${item.product_qty})`);
      // const productQuantities = arr.map((item) => item.product_qty);
      // const productMix = productNames + `(${productQuantities})`;
      // console.log(productMix, 'mix');
      setMessage(
        `Hola! Me interesan las prendas ${productNames} que vi en la pagina web`
      );
      navigator.clipboard.writeText(
        `Hola! Me interesan las prendas ${productNames} que vi en la pagina web`
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
    setLocalFavorites((cart) =>
      cart.map((item) =>
        id === item.id
          ? {
              ...item,
              product_qty:
                item.product_qty -
                (item.product_qty > 1 ? 1 : handleDelete(item.id)),
            }
          : item
      )
    );
  };

  const addQuantity = (id) => {
    // console.log(x, "asdfasdf");
    // const test = x.quantity + 1;
    // newLocalFavorites.map((obj) => ({ ...obj, quantity: test }));
    // return x.quantity++
    setLocalFavorites((cart) =>
      cart.map((item) =>
        id === item.id
          ? {
              ...item,
              product_qty: item.product_qty + (item.product_qty < 10 ? 1 : 0),
            }
          : item
      )
    );
  };

  function PriceMix() {
if(localFavorites.length){
  const testing = localFavorites.map(x => x.price * x.product_qty)
  const testingSum = testing.reduce((a, b) => a + b)
  return testingSum
} return
  }

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

              <div className="fav-qty">
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
          ))}
              <div>
                <div>
                  Total: {PriceMix()}
                  </div>
                </div>
          <div>
            {deletedItem.length > 0 ? (
              <button onClick={() => restoreItem()}>undo</button>
            ) : null}
            <button onClick={() => CopyInfo(localFavorites)}>Copiar</button>
            <span>{message}</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
