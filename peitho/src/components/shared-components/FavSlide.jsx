import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "../../styles/navbar.css";
import React, { useEffect, useRef, useState } from "react";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../actions";
import { Link } from "react-router-dom";

import { FaMinus, FaPlus } from "react-icons/fa";

export default function FavSlide({ openFav, setOpenFav }) {
  const favNumber = useSelector((state) => state.favoriteProducts);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenFav(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const popUpRef = useRef(null);
  const FavIcon = (
    <>
      {favNumber !== null && favNumber.length >= 1 ? (
        <div className="fav-number">
          <p>{favNumber.length}</p>
        </div>
      ) : (
        <div />
      )}
      <FavoriteBorderIcon id="favHeart" onClick={() => setOpenFav(true)} />
    </>
  );

  // const closeFavIcon = (
  //   <CloseRoundedIcon
  //     style={{ left: "0", right: "-15px" }}
  //     onClick={() => setOpenFav(false)}
  //   />
  // );

  // copy paste fav test

  const dispatch = useDispatch();
  const [localFavorites, setLocalFavorites] = useState([]);
  const [message, setMessage] = useState("");
  const [deletedItem, setDeletedItem] = useState({});
  const LSFlag = localStorage.getItem("Obj");

  // Modal links clickable

  useEffect(() => {
    if (openFav === true) {
      popUpRef.current && disableBodyScroll(popUpRef.current);
      document.body.style.pointerEvents = "none";
      document
        .getElementById("fav-slide")
        .setAttribute("style", "pointer-events: auto");
    }
    if (openFav === false) {
      popUpRef.current && enableBodyScroll(popUpRef.current);
      document.body.style.pointerEvents = "auto";
      document.body.style.overflow = "auto";
    }
  }, [openFav]);

  useEffect(() => {
    if (localStorage.length !== 0) {
      const localData = JSON.parse(localStorage.getItem("Obj"));
      if (localFavorites !== localData) {
        getFavorites(localData);
        setLocalFavorites(localData);
      }
      return;
    }
    return;
  }, [LSFlag]);


  function handleDelete(item) {
    let filteredItem = localFavorites.filter((x) => x.id === item.id);
    setDeletedItem(filteredItem);
    let filteredArray = localFavorites.filter((x) => x.id !== item.id);
    setLocalFavorites(filteredArray);
    dispatch(getFavorites(filteredArray));

    console.log(localFavorites);

    if (localFavorites.length > 1 && localFavorites !== null) {
      localStorage.setItem("Obj", JSON.stringify(filteredArray));
      toast.error(`${item.name} eliminado de favoritos.`, {duration: 2000, style: {fontFamily: "Arial"}});
    } else {
      localStorage.removeItem("Obj");
      toast.error(`${item.name} eliminado de favoritos.`, {duration: 2000, style: {fontFamily: "Arial"}});
    }

    console.log(localFavorites);
  }

  function restoreItem() {
    if (deletedItem.length > 0 && deletedItem !== null) {
      const auxArr = [];
      auxArr.push(...localFavorites, deletedItem[0]);
      console.log(auxArr);
      auxArr.sort((a, b) => a.id - b.id);
      toast.success(`${deletedItem[0].name} fue restaurado.`, {style: {fontFamily: "Arial"}});
      setLocalFavorites(auxArr);
      setDeletedItem({});
      return;
    }
  }

  const CopyInfo = (arr) => {
    const productQuantities = arr.map((item) => item.product_qty);
    if (arr && arr.length === 1) {
      setMessage(
        `Hola! Me interesa la prenda ${arr[0].name}(${productQuantities})! :)`
      );
      navigator.clipboard.writeText(
        `Hola! Me interesa la prenda ${arr[0].name}(${productQuantities})! :)`
      );
    }
    if (arr.length > 1 && arr !== null) {
      const productNames = arr.map(
        (item) => item.name + `(${item.product_qty})`
      );
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
    setLocalFavorites((cart) =>
      cart.map((item) =>
        id === item.id
          ? {
              ...item,
              product_qty:
                item.product_qty -
                (item.product_qty > 1 ? 1 : handleDelete(item)),
            }
          : item
      )
    );
  };

  const addQuantity = (id) => {
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
    console.log(localFavorites);
    if (localFavorites.length !== 0 && localFavorites !== null) {
      const testing = localFavorites.map((x) => x.price * x.product_qty);
      const testingSum = testing.reduce((a, b) => a + b);
      return "$" + testingSum;
    }
    if (localFavorites.length === 0 || localFavorites === null) {
      return;
    }
  }

  return (
    <div ref={wrapperRef} className="fav-slide-wrapper">
      <Toaster position="bottom-center" reverseOrder={false} />
      {FavIcon}
      {openFav ? (
        <div id="fav-slide" className="fav-slide-container opened-fav">
          {/* <div className="fav-blank-space" onClick={() => setOpenFav(false)} /> */}

          <div className="sticky-mobile">
            <div className="fav-buttons">
              {/* <div className="close-fav-icon">{closeFavIcon}</div> */}
              <div className="fav-container">
                <div className="fav-list">
                  <div className="fav-banner">
                    <h1>Lista de favoritos</h1>
                  </div>
                  <div className="fav-wrapper">
                    {localFavorites?.map((product) => (
                      <div className="fav-row" key={product.id}>
                        <div className="fav-card-wrapper">
                          <div className="fav-product-card" key={product.id}>
                            <div className="fav-card">
                              <Link to={`/catalogo/${product.id}`}>
                                <img
                                  src={
                                    product.image.length !== 1
                                      ? product.image[0]
                                      : product.image
                                  }
                                  alt="product sample"
                                />
                                <div className="fav-card-body">
                                  <h3>{product.name}</h3>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-grid">
                          <div className="row-name">
                            <h1>{product.name}</h1>
                          </div>
                          <div className="row-rest">
                            <div className="fav-qty">
                              <FaMinus
                                onClick={() => removeQuantity(product.id)}
                              />
                              <div>
                                <span>{product.product_qty}</span>
                              </div>
                              <FaPlus onClick={() => addQuantity(product.id)} />
                            </div>

                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              {`$${product.price * product.product_qty}`}

                              <FaPlus
                                style={{
                                  transform: "rotate(45deg)",
                                  color: "red",
                                }}
                                onClick={() => handleDelete(product)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {localFavorites === null || localFavorites?.length === 0 ? (
                    <div className="no-favs">
                      <div className="no-favs-box">
                        <span>
                          Todavía no agregaste ninguna prenda a tu lista, podés
                          hacerlo en el <a href="/catalogo">Catálogo</a>.
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <div className="total-fav">
                          Total: {localFavorites !== null ? PriceMix() : 0}
                        </div>
                      </div>
                      <div>
                        {deletedItem.length > 0 ? (
                        <button onClick={() => restoreItem()}>undo</button>
                      ) : null}
                        <button onClick={() => CopyInfo(localFavorites)}>
                          Copiar
                        </button>
                        <span>{message}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fav-slide-container">
          {/* <div className="fav-blank-space" onClick={() => setOpenFav(false)} /> */}

          <div className="sticky-mobile">
            <div className="fav-buttons">
              {/* <div className="close-fav-icon">{closeFavIcon}</div> */}
              <div className="fav-container">
                <div className="fav-list">
                  <div className="fav-banner">
                    <h1>Lista de favoritos</h1>
                  </div>
                  <div className="fav-wrapper">
                    {localFavorites?.map((product) => (
                      <div className="fav-row" key={product.id}>
                        <div className="fav-card-wrapper">
                          <div className="fav-product-card" key={product.id}>
                            <div className="fav-card">
                              <Link to={`/catalogo/${product.id}`}>
                                <img
                                  src={
                                    product.image.length !== 1
                                      ? product.image[0]
                                      : product.image
                                  }
                                  alt="product sample"
                                />
                                <div className="fav-card-body">
                                  <h3>{product.name}</h3>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-grid">
                          <div className="row-name">
                            <h1>{product.name}</h1>
                          </div>
                          <div className="row-rest">
                            <div className="fav-qty">
                              <FaMinus
                                onClick={() => removeQuantity(product.id)}
                              />
                              <div>
                                <span>{product.product_qty}</span>
                              </div>
                              <FaPlus onClick={() => addQuantity(product.id)} />
                            </div>

                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              {`$${product.price * product.product_qty}`}

                              <FaPlus
                                style={{
                                  transform: "rotate(45deg)",
                                  color: "red",
                                }}
                                onClick={() => handleDelete(product)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {localFavorites === null || localFavorites?.length === 0 ? (
                    <div className="no-favs">
                      <div className="no-favs-box">
                        <span>
                          Todavía no agregaste ninguna prenda a tu lista, podés
                          hacerlo en el <a href="/catalogo">Catálogo</a>.
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <div className="total-fav">
                          Total: {localFavorites !== null ? PriceMix() : 0}
                        </div>
                      </div>
                      <div>
                        {deletedItem.length > 0 ? (
                        <button onClick={() => restoreItem()}>undo</button>
                      ) : null}
                        <button onClick={() => CopyInfo(localFavorites)}>
                          Copiar
                        </button>
                        <span>{message}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
