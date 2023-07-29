import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NewestProduct({ allProducts }) {
  const lastProduct = allProducts.find(
    (x) => x.id === Math.max(...allProducts?.map((x) => x.id), 0)
  );

  const [previewImage, setPreviewImage] = useState(lastProduct?.image[0]);

  useEffect(() => {
    setPreviewImage(lastProduct?.image.length > 1 ? lastProduct?.image[0] : "");
  }, [lastProduct?.image]);

  return (
    <>
      {lastProduct ? (
        <div className="product-info">
          <div style={{ textAlign: "center", margin: "15px" }}>
            <Link to={`/catalogo/${lastProduct.id}`}>
              <h3>{lastProduct.name}</h3>
            </Link>
          </div>
          <div className="product-carousel">
            <div className="BigImage" key={previewImage}>
              {previewImage === "" ? (
                <div className="BigImageContainer">
                  <img src={lastProduct?.image[0]} alt="" draggable="false" />
                </div>
              ) : (
                <div className="BigImageContainer">
                  <img src={previewImage} alt="" draggable="false" />
                </div>
              )}
            </div>
            <div className="LittleImagesWrapper">
              <div className="LittleImages">
                {lastProduct?.image.length > 1
                  ? lastProduct?.image.map((product, index) => (
                      <div className="SingleLittleImage" key={index}>
                        <img
                          className={
                            product === previewImage ? null : "inactiveImages"
                          }
                          src={product}
                          draggable="false"
                          alt=""
                          onClick={() => setPreviewImage(product)}
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
}
