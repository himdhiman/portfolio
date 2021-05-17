import React, { useState } from "react";
import axios from "axios";
import { FillSpinner as Loader } from "react-spinners-kit";

function Prediction() {
  const endpoint = "http://localhost:8000/";
  const [selectedFile, changeSelectedFile] = useState(null);
  const [showimagefile, changeshowimagfile] = useState(null);
  const [heatmapPath, changeHeatMapPath] = useState(
    endpoint + "media/covid/imgdata/cam.png"
  );

  const [loadingState, changeLoadingState] = useState(false);

  function fileSelectHandler(event) {
    document.getElementById("uploaded-img").style.display = "block";
    changeSelectedFile(event.target.files[0]);
    changeshowimagfile(URL.createObjectURL(event.target.files[0]));
  }

  const fileUploadHandler = async (event) => {
    changeLoadingState(true);
    document.getElementById("predict-button").className =
      "positive large ui button disabled";
    const fd = new FormData();
    fd.append("image", selectedFile);
    const response = await axios.post(endpoint + "covid/", fd);
    document.getElementById("heatmap-img").style.display = "flex";
    const out = response.data;
    document.getElementById("pred-result").innerHTML = out.message;
    changeLoadingState(false);
    changeHeatMapPath(
      endpoint + "media/covid/imgdata/cam.png?time=" + new Date().getTime()
    );
    document.getElementById("predict-button").className =
      "positive large ui button";

    if (out.message === "Covid-19 Negative") {
      document.getElementById("pred-result").style.color = "green";
    } else {
      document.getElementById("pred-result").style.color = "red";
    }
  };

  return (
    <div>
      <section className="module parallax parallax-1"></section>
      <h1 id="heading">Covid - 19 Prediction</h1>
      <p id="main">
        A CNN based Neural network is trained which take x-ray images to predict
        the patient as corona virus positive or negative.
      </p>
      <div id="file-input">
        <input type="file" onChange={fileSelectHandler}></input>
        <button
          className="positive large ui button"
          id="predict-button"
          onClick={fileUploadHandler}
        >
          Predict
        </button>
        <Loader id="predict-loader" loading={loadingState} color="#893827" />
      </div>
      <div id="result-div">
        <div>
          <img src={showimagefile} id="uploaded-img" alt="" />
        </div>
        <div id="heatmap-img">
          <div>
            <img id="heatmap-img-img" src={heatmapPath} alt="heatmap"></img>
          </div>
        </div>
        <div>
          <div>
            <h3 id="pred-result"> </h3>
          </div>
        </div>
      </div>
      <section className="module parallax parallax-2"></section>
    </div>
  );
}

export default Prediction;
