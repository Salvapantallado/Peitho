import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NewestProduct({ allProducts }) {
  const lastProduct = allProducts.find(
    (x) => x.id === Math.max(...allProducts?.map((x) => x.id), 0)
  );

  const [previewImage, setPreviewImage] = useState();

  useEffect(() => {
    setPreviewImage(lastProduct?.image.length > 1 ? lastProduct?.image[0] : "");
  }, [lastProduct?.image]);

  return (
    <>
      <div className="section-title">
        <h2>Último lanzamiento</h2>
      </div>
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
                <img src={lastProduct?.image[0]} alt="" draggable="false" />
              ) : (
                <img src={previewImage} alt="" draggable="false" />
              )}
            </div>
            <div className="LittleImages">
              {lastProduct?.image.length > 1
                ? lastProduct?.image.map((product, index) => (
                    <img
                      className={
                        product === previewImage ? null : "inactiveImages"
                      }
                      key={index}
                      src={product}
                      draggable="false"
                      alt=""
                      onClick={() => setPreviewImage(product)}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
}
