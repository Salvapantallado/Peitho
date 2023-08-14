import React, {
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { getFavorites } from "../actions";

import HomeProducts from "../components/home-components/HomeProducts";
import MainImage from "../components/home-components/MainImage";
import CategoryBubble from "../components/shared-components/CategoryBubbles";
import Navbar from "../components/shared-components/Navbar";
import Ticker from "../components/shared-components/Ticker";
import HomeLoad from "../components/shared-components/HomeLoad";
import MobileNavbar from "../components/shared-components/MobileNavbar";
import Footer from "../components/shared-components/Footer";
import TransitionOut from "../components/shared-components/TransitionOut";
import "../styles/home.css";
import { Toaster } from "react-hot-toast";

export default function Home({
  flag,
  setFlag,
  screenTransition,
  setScreenTransition,
}) {
  const dispatch = useDispatch();
  const [localFavorites, setLocalFavorites] = useState([]);

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
    setScreenTransition(false);
  }, [setScreenTransition]);

  console.log(flag, "flag home");
  return (
    <>
      {screenTransition ? <TransitionOut /> : <HomeLoad />}
      <Ticker />
      <MainImage />
      <div className="home">
        <Navbar
          screenTransition={screenTransition}
          setScreenTransition={setScreenTransition}
          />
        <MobileNavbar
          screenTransition={screenTransition}
          setScreenTransition={setScreenTransition}
          />
          <Toaster position="bottom-center" reverseOrder={false} />
        <CategoryBubble flag={flag} setFlag={setFlag} />
        <div className="container">
          {/* <div className="background" /> */}
          <div className="home-container">
            <div className="section-title">
              <h2>Último lanzamiento</h2>
            </div>
            <HomeProducts />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
