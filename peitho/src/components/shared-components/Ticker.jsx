import React from "react";
import PeithoWhite from "../../images/Navbar/peitho-white.jpeg";
import PeithoBlack from "../../images/Navbar/peitho-black.jpeg";
import "../../styles/ticker.css";

export default function Ticker() {
  const TickerWrap = () => {
    return (
      <>
        <div className="ticker-item">
          <img src={PeithoWhite} alt="ticker 1" />
        </div>
        <div className="ticker-item">
          <img src={PeithoBlack} alt="ticker 1" />
        </div>
        <div className="ticker-item">
          <img src={PeithoWhite} alt="ticker 1" />
        </div>
        <div className="ticker-item">
          <img src={PeithoBlack} alt="ticker 1" />
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
      </div>
    </div>
  );
}
