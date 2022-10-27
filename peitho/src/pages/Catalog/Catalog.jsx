import "../../styles/catalog.css";
import React, { useState } from "react";
import Navbar from "../../components/shared-components/Navbar";
import Card from "../../components/catalog-components/Card";
// import CategoryBubble from "../../components/shared-components/CategoryBubbles";
import Ticker from "../../components/shared-components/Ticker";
import Pagination from "../../components/catalog-components/pagination";
import TransitionIn from "../../components/shared-components/TransitionIn";
import TransitionOut from "../../components/shared-components/TransitionOut";
import MobileNavbar from "../../components/shared-components/MobileNavbar";
import Footer from "../../components/shared-components/Footer";

export default function Catalog({flag, setFlag}) {
  const [currentPage, setCurrentPage] = useState(1);
  let currentFilter = useState([]);
  let [currentProducts] = useState([]);
  const [productsPerPage] = useState(8);
  const [screenTransition, setScreenTransition] = useState(false);
  let pageNumber = 0;

  return (
    <>
      {screenTransition ? <TransitionOut /> : <TransitionIn />}
      <div> 
        <Ticker />
        <Navbar screenTransition={screenTransition} setScreenTransition={setScreenTransition} />
        <MobileNavbar screenTransition={screenTransition} setScreenTransition={setScreenTransition} />
        <div className="catalog-wrapper">
          {/* <div className="background" /> */}

          <h1>Catalogo</h1>

          <div className="catalog-container">
            {/* <CategoryBubble /> */}
            <Card
              pageNumber={pageNumber}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              currentFilter={currentFilter}
              currentProducts={currentProducts}
              productsPerPage={productsPerPage}
              flag={flag} 
              setFlag={setFlag}
            />
          </div>
            <Pagination
              pageNumber={pageNumber}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              productsPerPage={productsPerPage}
            />
        </div>
        <Footer/>
      </div>
    </>
  );
}
