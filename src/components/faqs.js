import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const array = [
  "When and how are the tokens transferred to the investors who participated in the token sale? Who is responsible for this?",
  "What will the funds raised during the ICO be used for?",
  "What are the risks involved in participating in the ICO?",
  "Can I use SoulCoin outside the Soulverse ecosystem?",
];

function Faqs() {
  return (
    <div className="mb-12 faqs">
      <h2 className="heading-color mb-5 text-3xl">Token FAQs</h2>
      <ul>
        {array.map((item, i) => {
          return (
            <li key={i} className="faq">
              <p className="fs-15">{item}</p>
              <div
                className={
                  i === 0 ? "arrow-down  arrow-down-pink" : "arrow-down"
                }
              >
                <IoIosArrowDown />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Faqs;
