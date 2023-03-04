import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { nextPage, prevPage, getAllProducts } from "../../actions/index";
import "../../styles/catalog.css"

export default function Pagination({
  currentPage,
  setCurrentPage,
  pageNumber,
  productsPerPage,
  extRef
}) {
  var page = useSelector(state => state.page);
  // var filter = useSelector(state => state.setPagination.filter);
  // var valueFilter = useSelector(state => state.setPagination.valueFilter);
  // var valueFilter2 = useSelector(state => state.setPagination.valueFilter2);

  const products = useSelector((state) => state.allProducts)
  const filteredProducts = useSelector((state) => state.filteredProducts)
  // console.log(products);
  // console.log(currentProducts);
  // console.log(currentFilter[0]);

  // var dispatch = useDispatch();
  const test1 = Math.ceil(filteredProducts.length / productsPerPage);
  console.log(test1, "filtros");
  const test2 = Math.ceil(products.length / productsPerPage)
  console.log(test2, 'todos');

  const executeScroll = extRef.current?.scrollIntoView();

  return (
    <div className="container-pagination">
      <button
        onClick={() => {
          if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
            executeScroll()
            extRef.current = null
          }
            // dispatch(nextPage(page + 1));
            // dispatch(getAllProducts(page + 1, filter, valueFilter));
          //   window.scroll({
          //     top: 100,
          //     left: 100,
          //     behavior: 'smooth'
          //   });
        }}
        disabled={currentPage <= 1}
      >
        {console.log(currentPage)}
        prev
      </button>
      <button
        onClick={() => {
          if (currentPage > pageNumber) {
            setCurrentPage(currentPage + 1)
            executeScroll()
            extRef.current = null
            // dispatch(prevPage(page - 1));
            // dispatch(getAllProducts(page - 1, filter, valueFilter));
            // window.scroll({
            //   top: 100,
            //   left: 100,
            //   behavior: 'smooth'
            // });
          }
          
         
          
        }}
        disabled={currentPage === test1 || currentPage === test2}
      >
        next
      </button>
    </div>
  );
}