import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import roadmapImage from "../images/roadmap-image.png";

const array = [
  { no: "01", heading: "Ideation to POC", date: "June 2021 - June 2023" },
  { no: "02", heading: "Resources to MVP", date: "Nov 2022 - Nov 2023" },
  { no: "03", heading: "Demo to ICO", date: "Apr 2023 - Dec 2023" },
  { no: "04", heading: "The Launch", date: "Mar 2024" },
  { no: "05", heading: "Ongoing", date: "2024" },
];

function Roadmap() {
  return (
    <div className="section roadmap">
      <div className="flex justify-between align-start">
        <div className="w-2/3">
          <img src={roadmapImage} className="roadmap-image" alt="roadmap"></img>
        </div>
        <div className="text-left">
          <ul>
            {array.map((item, i) => {
              return (
                <li key={i} className="flex align-center li">
                  <div className="flex align-center">
                    <span
                      className={
                        i === 0
                          ? "border-color text-4xl mr-5 font-light"
                          : "gray-color text-4xl mr-5 font-light"
                      }
                    >
                      {item.no}
                    </span>
                    <div>
                      <p
                        className={
                          i === 0
                            ? "heading-color fs-14 mb-1.5 font-semibold"
                            : "gray-color fs-14 mb-1.5 font-semibold"
                        }
                      >
                        {item.heading}
                      </p>
                      <p className={i === 0 ? "fs-14" : "fs-14 gray-color"}>
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="arrow-down">
                    <IoIosArrowDown />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Roadmap;
