import React from "react";
import About from "./About";
import CovidApi from "./CovidApi";
import Message from "./Message";
import Prediction from "./Prediction";
import Vanta from "./Vanta";
import Footer from "../Footer";

function Covid() {
  return (
    <div>
      <Vanta />
      <br />
      <CovidApi />
      <br />
      <Prediction />
      <br />
      <Message />
      <br />
      <About />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Covid;
