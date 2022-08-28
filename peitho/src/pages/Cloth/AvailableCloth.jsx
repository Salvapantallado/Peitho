import "../../styles/catalog.css";
import React, { useState } from "react";
import Navbar from "../../components/shared-components/Navbar";
// import Card from "../../components/catalog-components/Card";
// import CategoryBubble from "../../components/shared-components/CategoryBubbles";
import Ticker from "../../components/shared-components/Ticker";
// import Pagination from "../../components/catalog-components/pagination";
import LoadScreen from "../../components/shared-components/LoadScreen";
import LoadScreenOut from "../../components/shared-components/LoadScreenOut";
import MobileNavbar from "../../components/shared-components/MobileNavbar";
import Footer from "../../components/shared-components/Footer";

export default function AvailableCloth(
  // {flag, setFlag}
  ) {
//   const [currentPage, setCurrentPage] = useState(1);
//   let currentFilter = useState([]);
//   let [currentProducts] = useState([]);
//   const [productsPerPage] = useState(8);
  const [loadScreen, setLoadScreen] = useState(false);

  // let pageNumber = 0;
  return (
    <>
      {loadScreen ? <LoadScreenOut /> : <LoadScreen />}
      <div>
        <Ticker />
        <Navbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
        <MobileNavbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
        <div className="container">
          {/* <div className="background" /> */}

          <h1>Telas disponibles</h1>

          <div className="catalog-container">
            {/* <CategoryBubble /> */}
           
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
