import React from "react";
import "../styles/index.css";
import Header from "./header";
import Token from "./token";
import Tokenomics from "./tokenomics";
import Roadmap from "./roadmap";
import Faqs from "./faqs";
import Footer from "./footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Token />
      <Tokenomics />
      <Roadmap />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
