import React, { useState } from "react";
import MobileNavbar from "../../components/shared-components/MobileNavbar";
import Navbar from "../../components/shared-components/Navbar";
import Ticker from "../../components/shared-components/Ticker";
import TransitionIn from "../../components/shared-components/TransitionIn";
import TransitionOut from "../../components/shared-components/TransitionOut";
import "../../styles/measure.css";

import Medida1 from "../../images/Home/Measures/Medida4.png";
import Medida2 from "../../images/Home/Measures/Medida1.png";
import Medida3 from "../../images/Home/Measures/Medida3.png";
import Medida4 from "../../images/Home/Measures/Medida2.png";

export default function MeasureTable() {
  const [screenTransition, setScreenTransition] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const measureArr = [Medida1, Medida2, Medida3, Medida4];

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      {screenTransition ? <TransitionOut /> : <TransitionIn />}
      <Ticker />
      <Navbar
        screenTransition={screenTransition}
        setScreenTransition={setScreenTransition}
      />
      <MobileNavbar
        screenTransition={screenTransition}
        setScreenTransition={setScreenTransition}
      />
      <div className="banner">
        <h2>Guía de medidas</h2>
      </div>

      <div className="Measure-wrapper">
        <h3>
          Usa las siguientes imagenes para tomar tus medidas correctamente:
        </h3>
        {measureArr?.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${index === activeIndex ? `zoom` : `normal-img`}`}
              onClick={() => handleClick(index)}
            >
              <img src={item} alt="measure png" />
            </div>
          );
        })}
      </div>
    </>
  );
}
