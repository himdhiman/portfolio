import React, { useState } from "react";
import axios from "axios";
import { FillSpinner as Loader } from "react-spinners-kit";

function Body() {
  const endpoint = "http://localhost:8000/";

  const [selectedFile, changeSelectedFile] = useState(null);
  const [showimagefile, changeshowimagfile] = useState(null);

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
    const response = await axios.post(endpoint + "captionbot/", fd);
    const out = response.data;
    document.getElementById("predict-button").className =
      "positive large ui button";
    changeLoadingState(false);
    document.getElementById("pred-result").innerHTML = out.message;
  };
  return (
    <div>
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
        <div>
          <h3 id="pred-result"> </h3>
        </div>
      </div>
    </div>
  );
}

export default Body;
