import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  clearProductDetail,
  getFavorites,
  getProductDetail,
} from "../../actions";
import "../../styles/detailCard.css";
import Navbar from "../shared-components/Navbar";

export default function DetailCard() {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const favProducts = useSelector((state) => state.favoriteProducts);

  const { id } = useParams();
  const navigate = useNavigate();

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
    }if (dataExists) {
      let filtered = LSArray.filter((item) => item.id !== data.id)
      dispatch(getFavorites(filtered));
      localStorage.setItem("Obj", JSON.stringify(filtered));
    }

    console.log(LSArray);
  }

  return (
    <div>
      <Navbar />
      <div className="detail">
        {console.log(productDetail)}
        {productDetail ? (
          <div className="detail-wrapper">
            <img src={productDetail.image && productDetail.image[0]} alt="detailed product pic" />
            <div className="detail-container">
              <div className="go-back-button">
              <button onClick={() => navigate('/catalogo')}>
                <img src="/ImgHelpers/goBack.png" alt="go back arrow" />
              </button>
              </div>
            {favProducts !== null &&
              favProducts.some((prod) => prod.id == productDetail.id) ? (
                <div className="fav-added">
                  <button onClick={() => handleClick(productDetail)}>
                    <img src="/ImgHelpers/FavAdded.png" alt="added fav" />
                  </button>
                </div>
              ) : (
                <div className="add-fav">
                  <button onClick={() => handleClick(productDetail)}>
                    <img src="/ImgHelpers/AddFav.png" alt="add fav" />
                  </button>
                </div>
              )}
              <h1>{productDetail.name}</h1>
              {productDetail.description2 !== "" ? (
                <div>
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
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
