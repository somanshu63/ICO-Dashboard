import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [13, 8, 8, 8, 5.5, 2.6, 2.5, 2.4, 2.2, 0.5],
      backgroundColor: [
        "#9F5ECF",
        "#8C6CF7",
        "#6C6AF8",
        "#4960E6",
        "#3668FA",
        "#3268FA",
        "#036BF2",
        "#117FF8",
        "#0CACF6",
        "#3DD2F6",
      ],
      labels: [
        "blue",
        "green",
        "red",
        "yellow",
        "pink",
        "orange",
        "blue",
        "blue",
        "blue",
        "blue",
      ],
      borderColor: ["rgba(0, 0, 0)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout: "40%",
};

function Tokenomics() {
  return (
    <div className="section tokenomics flex items-start">
      <div className="about-tokenomics ">
        <h2 className="heading-color mb-5 text-4xl">Tokenomics</h2>
        <p className="fs-14 leading-5 mb-5">
          SoulX's value lies in its incentives,
          <br /> rewards, and transaction facilitation,
          <br /> promoting a balanced and sustainable
          <br /> economic model.
        </p>
        <div className="middle hexagon-btn fs-13 font-bold dT">
          Detailed Tokenomics
          <div className="box box1"></div>
          <div className="box box2"></div>
        </div>
      </div>
      <div className="chart">
        <Doughnut width={225} data={data} options={options} />
      </div>
      <div className="w-1/3">
        <h2 className="heading-color mb-5 text-4xl">
          <span className="text-black">Why</span> $SOULX
        </h2>
        <p className="fs-14 leading-5 mb-5">
          Soulverse is making history with a completely
          <br /> decentralized IDentity infrastructure, the first
          <br /> of its kind to answer the question, ‘what now’,
          <br /> once you have a DID based identity.
        </p>
        <div className="middle hexagon-btn fs-13 font-bold kM">
          Know More
          <div className="box box1"></div>
          <div className="box box2"></div>
        </div>
      </div>
    </div>
  );
}
export default Tokenomics;
