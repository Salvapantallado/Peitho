import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearProductDetail,
  getFavorites,
  getProductDetail,
} from "../../actions";
import "../../styles/detailCard.css";
import Navbar from "../shared-components/Navbar";
import MobileNavbar from "../shared-components/MobileNavbar";
import Ticker from "../shared-components/Ticker";
import LoadScreen from "../../components/shared-components/LoadScreen";
import LoadScreenOut from "../../components/shared-components/LoadScreenOut";

export default function DetailCard() {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const favProducts = useSelector((state) => state.favoriteProducts);
  const [loadScreen, setLoadScreen] = useState(false);
  const [previewImage, setPreviewImage] = useState();
  const { id } = useParams();

  useEffect(() => {
    setLoadScreen(false);
    setTimeout(() => {
      setPreviewImage(
        productDetail.image?.length > 1 ? productDetail.image[0] : "lol"
      );
    }, 300);
  }, [productDetail.image]);

  useEffect(() => {
    dispatch(getProductDetail(id));
    let LSArray = JSON.parse(localStorage.getItem("Obj")) || [];
    dispatch(getFavorites(LSArray));
    return () => {
      dispatch(clearProductDetail());
    };
  }, [dispatch, id]);

  function handleClick(data) {
    let LSArray = JSON.parse(localStorage.getItem("Obj")) || [];
    let dataExists = LSArray.some((item) => item.id === data.id);
    if (!dataExists) {
      console.log("No esta, pero se agrega");
      LSArray.push(data);
      dispatch(getFavorites(LSArray));
      localStorage.setItem("Obj", JSON.stringify(LSArray));
    }
    if (dataExists) {
      let filtered = LSArray.filter((item) => item.id !== data.id);
      dispatch(getFavorites(filtered));
      localStorage.setItem("Obj", JSON.stringify(filtered));
    }

    // console.log(LSArray);
  }

  return (
    <div>
      {loadScreen ? <LoadScreenOut /> : <LoadScreen />}
      <Ticker />
      <Navbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
      <MobileNavbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
      <div className="detail">
        <div className="box">

        <div className="detail-link">
          <span>
            <a href="/">Inicio</a> <span>/</span> <a href="/catalogo">Catalogo</a> <span> / </span> <span>{productDetail.name}</span>
            </span>
        </div>
        {productDetail ? (
          <>
            <div className="detail-box">
              <div className="image-box">
                <div className="detail-imgs">
                  {productDetail.image?.length > 1
                    ? productDetail.image?.map((arrimg, index) => (
                      <div className="arrimgs" key={index}>
                          <img
                            className={
                              arrimg === previewImage ? null : "inactive"
                            }
                            draggable="false"
                            src={arrimg}
                            alt=""
                            role="button"
                            onClick={() => setPreviewImage(arrimg)}
                            />
                        </div>
                      ))
                    : null}
                </div>
                <div className="prev-img">

                <img
                  src={
                    (productDetail.image?.length > 1 &&
                      productDetail.image[0] === previewImage) ||
                      (previewImage && previewImage === "lol")
                      ? productDetail.image[0]
                      : previewImage
                    }
                    alt="detailed product pic"
                    />
                    </div>
              </div>
              <div className="detail-wrapper">
                <div className="detail-container">
                  {favProducts !== null &&
                  favProducts.some((prod) => prod.id === productDetail.id) ? (
                    <div className="favs-added">
                      <button onClick={() => handleClick(productDetail)}>
                        <img src="/ImgHelpers/FavAdded.png" alt="added fav" />
                      </button>
                    </div>
                  ) : (
                    <div className="add-favs">
                      <button onClick={() => handleClick(productDetail)}>
                        <img src="/ImgHelpers/AddFav.png" alt="add fav" />
                      </button>
                    </div>
                  )}
                  <h2>{productDetail.name}</h2>
                  {productDetail.description2 !== "" ? (
                    <div className="detail-description">
                      <h1>ARS ${productDetail.price}</h1>
                      <p>{productDetail.description}</p>
                      <br />
                      <p>{productDetail.description2}</p>
                    </div>
                  ) : (
                    <div>
                      <p>{productDetail.description}</p>
                    </div>
                  )}
                  <h2>$ {productDetail.price}</h2>

                  <div className="detail-buttons">
                    <button>Reservar</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Cargando...</p>
          )}
          </div>
      </div>
    </div>
  );
}
