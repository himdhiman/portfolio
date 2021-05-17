import React from "react";
import "./CaptionBot.css";
import HomeButton from "../HomeButton";
import Body from "./Body";

function CaptionBot() {
  return (
    <>
      <div id="caption-header-div">
        <h1 id="caption-heading">Caption Bot</h1>
        <div id="caption-home">
          <HomeButton />
        </div>
      </div>
      <Body />
    </>
  );
}

export default CaptionBot;
