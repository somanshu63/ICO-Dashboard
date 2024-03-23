import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <div className="header align-center flex">
        <div className="flex align-center">
          <img src={logo} alt="logo" className="mr-8"></img>
          <span className="fs-12 mr-5 heading-color font-semibold">
            Dashboard
          </span>
          <span className="fs-12 mr-5">Buy Tokens</span>
          <span className="fs-12">Back To Main Website</span>
        </div>
        <div className="flex align-center">
          {/* <div className="fs-12 hexagon-btn">Select Network</div> */}
          <div className="middle fs-12 mr-9">
            Select Network
            <div className="box box1"></div>
            <div className="box box2"></div>
          </div>
          <div className="middle fs-12 mr-4">
            Connect Wallet
            <div className="box box1"></div>
            <div className="box box2"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
