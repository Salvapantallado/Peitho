import HomeProducts from "../components/home-components/HomeProducts";
// import Instagram from "../components/home-components/Instagram";
import MainImage from "../components/home-components/MainImage";
import CategoryBubble from "../components/shared-components/CategoryBubbles";
import Navbar from "../components/shared-components/Navbar";
import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Ticker from "../components/shared-components/Ticker";
import { useDispatch } from "react-redux";
import { getFavorites } from "../actions";
import LoadScreen from "../components/shared-components/LoadScreen";
import LoadScreenOut from "../components/shared-components/LoadScreenOut";
import MobileNavbar from "../components/shared-components/MobileNavbar";
import Footer from "../components/shared-components/Footer";

export default function Home({flag, setFlag}) {
  const dispatch = useDispatch();
  const [localFavorites, setLocalFavorites] = useState([]);
  const [loadScreen, setLoadScreen] = useState(false);

  useEffect(() => {
    dispatch(getFavorites(localFavorites));
  }, [dispatch, localFavorites]);

  useEffect(() => {
    if (localStorage !== 0) {
      const localData = JSON.parse(localStorage.getItem("Obj"));
      return setLocalFavorites(localData);
    }
    return;
  }, [setLocalFavorites]);

  useEffect(() => {
    setLoadScreen(false);
  }, []);

  console.log(flag, "flag home");
  return (
    <>
      <div className="home">
        {loadScreen ? <LoadScreenOut /> : <LoadScreen />}
        <Ticker />
        <MainImage />
        <Navbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
        <MobileNavbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
        <CategoryBubble flag={flag} setFlag={setFlag}/>
        <div className="container">
          {/* <div className="background" /> */}
          <div className="home-container">
            <div>
              <HomeProducts />
            </div>
            {/* <Instagram /> */}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
