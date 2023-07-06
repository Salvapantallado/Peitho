import { Link } from "react-router-dom";

export default function Popular({ allProducts }) {
  const popularItems = allProducts.sort(() => Math.random() - 0.5).slice(0, 12);
  const popularItems2 = popularItems.slice(0).reverse();

  console.log(popularItems);
  return (
    <div className="popular-container">
      <div className="section-title">
        <h2>Más Populares</h2>
      </div>
      <div className="popular-wrapper">
        <div className="popular-grids">
          {popularItems?.map((popItem, index) => (
            <div key={index}>
              <Link to={`/catalogo/${popItem.id}`}>
                <img
                  src={
                    popItem.image.length !== 1
                      ? popItem.image[0]
                      : popItem.image
                  }
                  alt="product sample"
                />
              </Link>
            </div>
            // <div key={index}>
            //     <img src={popItem.image[0]} alt="popular clothing" />
            // </div>
          ))}
          {popularItems?.map((popItem, index) => (
            <div key={index}>
              <Link to={`/catalogo/${popItem.id}`}>
                <img
                  src={
                    popItem.image.length !== 1
                      ? popItem.image[0]
                      : popItem.image
                  }
                  alt="product sample"
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="popular-grids2">
          {popularItems2?.map((popItem, index) => (
            <div key={index}>
              <Link to={`/catalogo/${popItem.id}`}>
                <img
                  src={
                    popItem.image.length !== 1
                      ? popItem.image[0]
                      : popItem.image
                  }
                  alt="product sample"
                />
              </Link>
            </div>
          ))}
          {popularItems2?.map((popItem, index) => (
            <div key={index}>
              <Link to={`/catalogo/${popItem.id}`}>
                <img
                  src={
                    popItem.image.length !== 1
                      ? popItem.image[0]
                      : popItem.image
                  }
                  alt="product sample"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
