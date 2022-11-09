import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearProductDetail,
  getAllProducts,
  getFavorites,
  getProductDetail,
} from "../../actions";
import "../../styles/detailCard.css";
import Navbar from "../shared-components/Navbar";
import MobileNavbar from "../shared-components/MobileNavbar";
import Ticker from "../shared-components/Ticker";
import TransitionIn from "../../components/shared-components/TransitionIn";
import TransitionOut from "../../components/shared-components/TransitionOut";
import Footer from "../shared-components/Footer";

export default function DetailCard({ screenTransition, setScreenTransition }) {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const allProducts = useSelector((state) => state.allProducts);
  const favProducts = useSelector((state) => state.favoriteProducts);

  const [previewImage, setPreviewImage] = useState();
  const { id } = useParams();
  const [others, setOthers] = useState([]);

  const noDetailArr = allProducts.filter((x) => x.id !== productDetail.id);
  const othersArr = noDetailArr.sort(() => Math.random() - 0.5).slice(0, 6);
  console.log(others, allProducts);

  useEffect(() => {
    setScreenTransition(false);
  }, []);

  useEffect(() => {
    setOthers(othersArr);
  }, [productDetail]);

  useEffect(() => {
    setTimeout(() => {
      setPreviewImage(
        productDetail.image?.length > 1 ? productDetail.image[0] : productDetail.image
      );
    }, 1500);
  }, [productDetail.image]);

  useEffect(() => {
    dispatch(getAllProducts());
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
  }
  const LoadCurtain = async (e) => {
    setScreenTransition(!screenTransition);
    setTimeout(() => {
      setScreenTransition(!screenTransition);
      window.location.href = e;
    }, 2000);
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
      <div className="detail">
        <div className="box">
          <div className="detail-link">
            <span>
              <button onClick={() => LoadCurtain("/")}>Inicio</button>{" "}
              <span>/</span>{" "}
              <button onClick={() => LoadCurtain("/catalogo")}>Catalogo</button>{" "}
              <span> / </span> <span>{productDetail.name}</span>
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
                  <div className="prev-img" key={previewImage}>
                    {console.log(previewImage)}
                    {previewImage?.length > 1 ? (
                      <img src={productDetail?.image[0]} alt="" />
                    ) : (
                      <img src={previewImage} alt="" />
                    )}
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
        <div className="other-items">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "65vw",
              marginLeft: "15px",
            }}
          >
            <h1>También te puede interesar</h1>
          </div>
          <div className="cards-container" style={{width: "100%", margin: "0"}}>
            <div className="cards-grid">
              {others && others.length !== 0
                ? others.map((product) => (
                    <div className="product-card" key={product.id}>
                      <div className="card animate__animated animate__fadeInRight">
                        <a href={`/catalogo/${product.id}`}>
                          <img
                            src={
                              product.image.length !== 1
                                ? product.image[0]
                                : product.image
                            }
                            alt="product sample"
                          />
                          <div className="card-body">
                            <h3>{product.name}</h3>
                          </div>
                        </a>
                        {favProducts !== null &&
                        favProducts.some((prod) => prod.id === product.id) ? (
                          <div className="favs-added">
                            <button onClick={() => handleClick(product)}>
                              <img
                                src="/ImgHelpers/FavAdded.png"
                                alt="added fav"
                              />
                            </button>
                          </div>
                        ) : (
                          <div className="add-favs">
                            <button onClick={() => handleClick(product)}>
                              <img src="/ImgHelpers/AddFav.png" alt="add fav" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
