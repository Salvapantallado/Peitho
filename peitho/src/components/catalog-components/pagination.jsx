import React from "react";
import { useSelector } from "react-redux";
// import { nextPage, prevPage, getAllProducts } from "../../actions/index";
import "../../styles/catalog.css";

export default function Pagination({
  currentPage,
  setCurrentPage,
  pageNumber,
  productsPerPage,

}) {

  const products = useSelector((state) => state.allProducts);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const filteredPages = Math.ceil(filteredProducts.length / productsPerPage);
  const allProductPages = Math.ceil(products.length / productsPerPage);
  console.log(filteredProducts, "filtros");
  console.log(products, "todos");

  // const LastPage = currentFilter === [] ? allProductPages : filteredPages;
  // console.log(LastPage, "last pages");

  // FALTA RETOCAR PAGINATION COMPONENT
  // const checkLocalStorage = localStorage.getItem('filter');
  // console.log(checkLocalStorage, "ACA LOKO");
  console.log(currentPage, "current page check");
  return (
    <div className="container-pagination">
      <div className="pagination-wrapper">
      <button
        onClick={() => {
          if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
        disabled={currentPage <= 1}
      >
        {console.log(currentPage)}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </button>
      {filteredProducts && filteredProducts.length === 0 ? (
        <>
          <h2 className={currentPage === 1 ? "activePage" : null}>{1}</h2>
          {currentPage === allProductPages ||
          currentPage === 1 ||
          currentPage === 2 ? null : (
            <h2>. . .</h2>
          )}

          <h2
            className={
              currentPage === 1 || currentPage === allProductPages
                ? null
                : "activePage"
            }
          >
            {currentPage === 1 || currentPage === allProductPages
              ? ". . ."
              : currentPage}
          </h2>
          {currentPage === 1 ||
          currentPage === allProductPages ||
          currentPage === allProductPages - 1 ? null : (
            <h2>. . .</h2>
          )}
          <h2 className={currentPage === allProductPages ? "activePage" : null}>
            {allProductPages}
          </h2>
        </>
      ) : (
        <>
          <h2 className={currentPage === 1 ? "activePage" : null}>{1}</h2>




          {currentPage === filteredPages ||
          currentPage === 1 ||
          currentPage === 2 ? null : (
            <h2>. . .</h2>
          )}



            {filteredPages <= 2 ? null : 
            <>
          <h2
            className={
              currentPage === 1 || currentPage === filteredPages 
                ? null
                : "activePage"
            }
          >
            {currentPage === 1 || currentPage === filteredPages
              ? ". . ."
              : currentPage}
          </h2>
            </>
            }



          {currentPage === 1 ||
          currentPage === filteredPages ||
          currentPage === filteredPages - 1 ? null : (
            <h2>. . .</h2>
          )}

            {filteredPages === 1 ? null : 
            <>
          <h2 className={currentPage === filteredPages ? "activePage" : null}>
            {filteredPages}
          </h2>
            </>
            }
        </>
      )}
      <button
        onClick={() => {
          if (currentPage > pageNumber) {
            setCurrentPage(currentPage + 1);
          }
        }}
        disabled={
          currentPage === filteredPages || currentPage === allProductPages
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    </div>
    </div>
  );
}
