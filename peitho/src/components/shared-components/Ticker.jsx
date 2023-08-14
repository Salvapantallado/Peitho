import React from "react";
import PeithoBlack from "../../images/Navbar/peitho-black.jpeg";
import "../../styles/ticker.css";

export default function Ticker() {
  const TickerWrap = () => {
    return (
      <>
        <div className="ticker-item">
          <img src={PeithoBlack} alt="ticker 1" />
        </div>
        <div className="ticker-text">
          <span>-</span>
          <span>Envios a toda la Argentina</span>
          <span>-</span>
        </div>
        <div className="ticker-text">
          <span>La demora depende de la cantidad de pedidos actuales</span>
          <span>-</span>
        </div>
      </>
    );
  };

  return (
    <div className="ticker-wrapper">
      <div className="ticker" style={{ animationPlayState: "running" }}>
        <TickerWrap />
        <TickerWrap />
        <TickerWrap />
        <TickerWrap />
        <TickerWrap />
        <TickerWrap />
        <TickerWrap />
        <TickerWrap />
        <TickerWrap />
        <TickerWrap />
        <TickerWrap />
      </div>
    </div>
  );
}
