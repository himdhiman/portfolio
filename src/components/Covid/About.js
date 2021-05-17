import React from "react";
import confMatrix from "./images/confMatrix.png";
import lossplot from "./images/lossPlot.png";

function About() {
  return (
    <>
      <div>
        <h1 id="heading">About The Model</h1>
        <b>
          <img
            id="plot-img"
            className="ui medium left floated image"
            src={lossplot}
            alt=""
          />
          <img
            id="conf-img"
            className="ui medium right floated image"
            src={confMatrix}
            alt=""
          />
          <p id="main">
            The model is an instance of deep Convolutional Neural Network(CNN).
            ImageNet model is trained on the Covid Dataset and transfer learning
            is used. For more detail about the architecture visit my github
            repository, links in the below section.
          </p>
          <p id="main">
            It has an accuracy of about 97% on the train and test datasets.
          </p>
        </b>
      </div>
    </>
  );
}

export default About;
