import { Link } from "react-router-dom";

export default function Popular({ allProducts }) {
  const mainPopular = allProducts.sort(() => Math.random() - 0.5).slice(0, 11);
  const popularSlice1 = mainPopular.slice(0, 6);
  const popularItems = popularSlice1.concat(popularSlice1)
  const popularSlice2 = mainPopular.slice(6);
  const popularItems2 = popularSlice2.concat(popularSlice2)

  console.log(popularItems);
  return (
    <div className="popular-container">
      <div className="section-title">
        <h2>Más Populares</h2>
      </div>
      <div className="popular-wrapper1">
        <div className="popular-grids">
          {popularItems?.map((popItem, index) => (
            <div key={index} className="imgContainer">
            <div className="card-body">
                <h3>{popItem.name}</h3>
              </div>
            <Link to={`/catalogo/${popItem.id}`} key={index}>
              <img
                src={
                  popItem.image.length !== 1 ? popItem.image[0] : popItem.image
                }
                alt="product sample"
              />
            </Link>
           </div>
          ))}
        </div>
      </div>
      <div className="popular-wrapper2">
        <div className="popular-grids2">
          {popularItems2?.map((popItem, index) => (
            <div key={index} className="imgContainer">
              <div className="card-body">
                <h3>{popItem.name}</h3>
              </div>
            <Link to={`/catalogo/${popItem.id}`} key={index}>
              <img
                src={
                  popItem.image.length !== 1 ? popItem.image[0] : popItem.image
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
