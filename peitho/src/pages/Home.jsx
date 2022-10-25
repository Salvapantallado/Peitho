import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFavorites } from "../actions";

import HomeProducts from "../components/home-components/HomeProducts";
import MainImage from "../components/home-components/MainImage";
import CategoryBubble from "../components/shared-components/CategoryBubbles";
import Navbar from "../components/shared-components/Navbar";
import Ticker from "../components/shared-components/Ticker";
import HomeLoad from "../components/shared-components/HomeLoad";
// import HomeLoadOut from "../components/shared-components/HomeLoadOut";
import MobileNavbar from "../components/shared-components/MobileNavbar";
import Footer from "../components/shared-components/Footer";
import TransitionOut from "../components/shared-components/TransitionOut";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sew from "../components/home-components/Sew";

import "../styles/home.css";

export default function Home({ flag, setFlag }) {
  const dispatch = useDispatch();
  const [localFavorites, setLocalFavorites] = useState([]);
  const [screenTransition, setScreenTransition] = useState(false);

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
  }, []);

  console.log(flag, "flag home");
  return (
    <>
      <div className="home">
        {screenTransition ? <TransitionOut /> : <HomeLoad />}
        <Ticker />
        <MainImage />
        <Navbar
          screenTransition={screenTransition}
          setScreenTransition={setScreenTransition}
        />
        <MobileNavbar
          screenTransition={screenTransition}
          setScreenTransition={setScreenTransition}
        />
        <CategoryBubble flag={flag} setFlag={setFlag} />
        <div className="container">
          {/* <div className="background" /> */}
          <div className="home-container">
            <div>
              <HomeProducts />
            </div>
            {/* <div className="wrapper">
              <Canvas className="canvas">
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[0, 1, 1]} intensity={1} />
                <directionalLight position={[1, 1, 0]} intensity={1} />
                <Suspense fallback={null}>
                  <Sew />
                </Suspense>
              </Canvas>
            </div> */}
          </div>
        </div>
        <Footer />
      </div> 
    </>
  );
}

