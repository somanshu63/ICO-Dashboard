import React from "react";
import soulcoin from "../images/soulcoin.png";
import { IoIosArrowDown } from "react-icons/io";

function Token() {
  return (
    <div className="token section flex items-start">
      <div className="balance-container">
        <h3 className="heading-color font-medium text-base">TOKEN BALANCE</h3>
        <div className="balance">2OOO.O</div>
        <p className="description-black">$SOULX</p>
        <p className="description-gray mb-2">
          1 ETH = <span className="font-semibold">00 $SOULX</span>
        </p>
        <p className="description-gray">
          1 ETH = <span className="font-semibold">3936.96 USD</span>
        </p>
      </div>
      <div className="soulcoin">
        <div className="flex align-center mb-5">
          <div className="ml-4">
            <p className="coin-text">
              Token <br />
              Name:
            </p>
            <p className="coin-name">Soulcoin</p>
          </div>
          <img src={soulcoin} className="soulcoin-image" alt="soulcoin"></img>
          <div className="text-right mr-4">
            <p className="coin-text">
              Ticker <br />
              Symbol:
            </p>
            <p className="coin-name">$SOULX</p>
          </div>
        </div>
        <div className="wPB-container">
          <div className="boxWPB boxLeft"></div>
          <div className="white-paper-btn">Download White Paper</div>
          <div className="boxWPB boxRight"></div>
        </div>
      </div>
      <div className="text-left w-1/3">
        <h3 className="heading-color font-medium text-base">
          TOKEN CALCULATION
        </h3>
        <p className="mt-2 fs-14">Enter amount to calculate token</p>
        <div className="currency flex align-center justify-between">
          <span className="heading-color calculation-text">01</span>
          <div className="currency-listdown align-center flex">
            Currency <IoIosArrowDown className="arrow" />
          </div>
        </div>
        <p className="fs-14 mb-5">
          <span className="font-semibold">00 $SoulX</span> you receive
        </p>
        <p className="description-gray leading-5 fs-13 font-normal">
          Please note that, $SOULX tokens will be <br /> distributed according
          to vesting schedule
        </p>
      </div>
    </div>
  );
}
export default Token;
