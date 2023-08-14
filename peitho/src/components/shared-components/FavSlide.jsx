import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InstaIcon from "../../images/Instagram.png";
import "../../styles/navbar.css";
import React, { useEffect, useRef, useState } from "react";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../actions";
import { Link } from "react-router-dom";

import { FaMinus, FaPlus } from "react-icons/fa";

export default function FavSlide({ openFav, setOpenFav }) {
  const favNumber = useSelector((state) => state.favoriteProducts);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenFav(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
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
      <FavoriteBorderIcon
        id="favHeart"
        onClick={() => setOpenFav(true)}
        style={{ cursor: "pointer" }}
      />
    </>
  );

  const dispatch = useDispatch();
  const [localFavorites, setLocalFavorites] = useState([]);
  const [message, setMessage] = useState("");
  const LSFlag = localStorage.getItem("Obj");

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
    /* eslint-disable */
  }, [LSFlag]);
/* eslint-disable */

  useEffect(() => {
    if(message !== ""){
    setMessage("");
  }
    return;
  }, [localFavorites]);

  function handleDelete(item) {
    let filteredArray = localFavorites.filter((x) => x.id !== item.id);
    setLocalFavorites(filteredArray);
    dispatch(getFavorites(filteredArray));


    if (localFavorites.length > 1 && localFavorites !== null) {
      localStorage.setItem("Obj", JSON.stringify(filteredArray));
      toast.error(`${item.name} eliminado de favoritos.`, {
        duration: 2000,
        style: { fontFamily: "Arial" },
      });
    } else {
      localStorage.removeItem("Obj");
      toast.error(`${item.name} eliminado de favoritos.`, {
        duration: 2000,
        style: { fontFamily: "Arial" },
      });
    }
  }

  const CopyInfo = (arr) => {
    const productQuantities = arr.map((item) => item.product_qty);
    toast.success(`Mensaje copiado al portapapeles`, {
      duration: 2000,
      style: { fontFamily: "Arial" },
    });
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
      {FavIcon}
      {openFav ? (
        <div id="fav-slide" className="fav-slide-container opened-fav">
          <div className="sticky-mobile">
            <div className="fav-buttons">
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
                      <div className="info">
                        <p>
                          Copiá tu carrito y mandamelo a mi insta{" "}
                          <a target="_blank" rel="noreferrer" style={{fontFamily: "Unifrakturcook", color: "slateblue"}} href="https://www.instagram.com/peitho.ok/"><img style={{width: "16px", height: "16px"}} src={InstaIcon} alt="instaicon"/>Peitho Diseños</a>.
                          Todas las compras se realizan por medio de mi
                          instagram, ésta página solo sirve a modo de Diseños catálogo!
                        </p>
                      </div>
                      <div className="copy-wrapper">
                        <div className="copy-button">
                          <button onClick={() => CopyInfo(localFavorites)}>
                            Copiar
                          </button>
                          <button onClick={() => setMessage("")}>
                            Borrar
                          </button>
                        </div>
                        <div
                          className={
                            message === "" ? "bubble not-visible" : "bubble"
                          }
                        >
                          <span>{message}</span>
                        </div>
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
          <div className="sticky-mobile">
            <div className="fav-buttons">
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
                      <div className="info">
                        <p>
                          Copiá tu carrito y mandamelo a mi insta{" "}
                          <a target="_blank" rel="noreferrer" style={{fontFamily: "Unifrakturcook", color: "slateblue"}} href="https://www.instagram.com/peitho.ok/"><img style={{width: "16px", height: "16px"}} src={InstaIcon} alt="instaicon"/>Peitho Diseños</a>.
                          Todas las compras se realizan por medio de mi
                          instagram, ésta página solo sirve a modo de catálogo!
                        </p>
                      </div>
                      <div className="copy-wrapper">
                        <div className="copy-button">
                          <button onClick={() => CopyInfo(localFavorites)}>
                            Copiar
                          </button>
                          <button onClick={() => setMessage("")}>
                            Borrar
                          </button>
                        </div>
                        <div
                          className={
                            message === "" ? "bubble not-visible" : "bubble"
                          }
                        >
                          <span>{message}</span>
                        </div>
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
