import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterItems, getAllProducts, getFavorites } from "../../actions";
import "../../styles/cards.css";
import "animate.css";

import Top from "../../images/Home/Bubbles/circle-one.jpg";
import Falda from "../../images/Home/Bubbles/circle-two.jpg";
import Vestido from "../../images/Home/Bubbles/circle-three.jpg";
import Pantalon from "../../images/Home/Bubbles/circle-four.jpg";
import Abrigo from "../../images/Home/Bubbles/circle-five.jpg";
import Camisa from "../../images/Home/Bubbles/circle-six.jpg";
import "../../styles/category-bubbles.css";

export default function Card({
  currentPage,
  setCurrentPage,
  pageNumber,
  currentFilter,
  currentProducts,
  productsPerPage,
  flag,
  setFlag,
  extraFlag,
  setExtraFlag,
}) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.allProducts);
  const favProducts = useSelector((state) => state.favoriteProducts);
  const filteredClothes = useSelector((state) => state.filteredProducts);
  // console.log(productList, "lista completa");
  // console.log(filteredClothes, "filtrado");

  // const [productsPerPage] = useState(4);

  const lastPostIndex = currentPage * productsPerPage;
  const firstPostIndex = lastPostIndex - productsPerPage;
  currentProducts = productList.slice(firstPostIndex, lastPostIndex);

    currentFilter = filteredClothes.slice(firstPostIndex, lastPostIndex);
  

  if (filteredClothes.length === 0) {
    pageNumber = Math.ceil(productList.length / productsPerPage);
  }
  if (filteredClothes.length > 0) {
    pageNumber = Math.ceil(filteredClothes.length / productsPerPage);
  }

  useEffect(() => {
    dispatch(getAllProducts());
    let LSArray = JSON.parse(localStorage.getItem("Obj")) || [];
    dispatch(getFavorites(LSArray));
  }, [dispatch]);

  function handleClick(data) {
    let LSArray = JSON.parse(localStorage.getItem("Obj")) || [];

    let dataExists = LSArray.some((item) => item.id === data.id);
    if (!dataExists) {
      LSArray.push(data);
      dispatch(getFavorites(LSArray));
      localStorage.setItem("Obj", JSON.stringify(LSArray));
      toast.success(`${data.name} añadido a favoritos!`);
    }
    if (dataExists) {
      let filtered = LSArray.filter((item) => item.id !== data.id);
      dispatch(getFavorites(filtered));
      localStorage.setItem("Obj", JSON.stringify(filtered));
      toast.error(`${data.name} eliminado de favoritos!`);
    }
    console.log(LSArray);
  }

  const filter = (e) => {
    console.log(filteredClothes);
    dispatch(filterItems(e, productList));
  };

  console.log(currentFilter);
  console.log(currentProducts);

  //Category bubble flag for filtering

  useEffect(() => {
    try {
      console.log(localStorage.getItem("flag"));
      let flagAux = localStorage.getItem("flag");
      if (flagAux !== "") {
        setFlag(JSON.parse(localStorage.getItem("flag")));
        console.log(flag, "test");
        setTimeout(() => {
          localStorage.removeItem("flag");
        }, 400);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  
    useEffect(() => {
      if (flag !== "" && flag !== null && productList) {
        filter(flag.name);
        setFlag("");
      }
    }, [productList]);

    //Category 'peitho cute / alternative' flag for filtering

  useEffect(() => {
    try {
      console.log(localStorage.getItem("extraFlag"));
      let extraFlagAux = localStorage.getItem("extraFlag");
      if (extraFlagAux !== "") {
        setExtraFlag(JSON.parse(localStorage.getItem("extraFlag")));
        console.log(extraFlag, "test");
        setTimeout(() => {
          localStorage.removeItem("extraFlag");
        }, 400);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);


  console.log(flag, "flag");

  const handleRemoveFilter = () => {
    filter("all")
    setCurrentPage(1)
  }

  console.log(extraFlag, "dis is de flag");
  

  return (
    <>
      <div className="category-wrapper">
        <Toaster position="bottom-center" reverseOrder={false} />
        <div className="category-button">
          <button onClick={() => handleRemoveFilter()}>
            Remove filter
          </button>
        </div>
        <div className="category-bubbles">
          <div className="category-container">
            <button onClick={() => filter("tops")}>
              <img src={Top} alt="Tops" />
              <span>Tops</span>
            </button>
          </div>

          <div className="category-container">
            <button onClick={() => filter("faldas")}>
              <img src={Falda} alt="Faldas" />
              <span>Faldas</span>
            </button>
          </div>

          <div className="category-container">
            <button onClick={() => filter("vestidos")}>
              <img src={Vestido} alt="Vestidos" />
              <span>Vestidos</span>
            </button>
          </div>

          <div className="category-container">
            <button onClick={() => filter("pantalones")}>
              <img src={Pantalon} alt="Pantalones" />
              <span>Pantalones</span>
            </button>
          </div>

          <div className="category-container">
            <button onClick={() => filter("abrigos")}>
              <img src={Abrigo} alt="Abrigos" />
              <span>Abrigos</span>
            </button>
          </div>

          <div className="category-container">
            <button onClick={() => filter("camisas")}>
              <img src={Camisa} alt="Camisas" />
              <span>Camisas</span>
            </button>
          </div>
        </div>
      </div>
      <div className="cards-container">
        <div className="cards-grid">
          {currentFilter.length !== 0
            ? currentFilter.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="card animate__animated animate__fadeInRight">
                    <Link to={`/catalogo/${product.id}`}>
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
                        <h4>$ {product.price}</h4>
                      </div>
                    </Link>
                    {favProducts !== null &&
                    favProducts.some((prod) => prod.id === product.id) ? (
                      <div className="favs-added">
                        <button onClick={() => handleClick(product)}>
                          <img src="/ImgHelpers/FavAdded.png" alt="added fav" />
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
            : currentProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="card animate__animated animate__fadeInRight">
                    <Link to={`/catalogo/${product.id}`}>
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
                        <h4>$ {product.price}</h4>
                      </div>
                    </Link>
                    {favProducts !== null &&
                    favProducts.some((prod) => prod.id === product.id) ? (
                      <div className="favs-added">
                        <button onClick={() => handleClick(product)}>
                          <img src="/ImgHelpers/FavAdded.png" alt="added fav" />
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
              ))}
        </div>
      </div>
    </>
  );
}
