import React from "react";
import axios from "axios";

function Run() {
  const endpoint = "http://localhost:8000/";

  const generate = async () => {
    document.getElementById("help-text").style.display = "block";
    document.getElementById("download-file").style.display = "none";
    document.getElementById("gen-btn").className = "ui green button disabled";
    await axios.post(endpoint + "musicgen/");
    document.getElementById("gen-btn").className = "ui green button";
    document.getElementById("help-text").style.display = "none";
    document.getElementById("download-file").style.display = "block";
  };

  return (
    <>
      <div id="music-btn">
        <button id="gen-btn" className="ui green button" onClick={generate}>
          Generate Music ...
        </button>
        <h5 id="help-text">Plaese Wait .. It will take around 30 sec.</h5>
      </div>
      <a
        id="download-file"
        href="http://localhost:8000/media/music/output.mid"
        download
      >
        Click to download
      </a>
    </>
  );
}

export default Run;
