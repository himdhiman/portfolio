import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Covid from "./components/Covid/Covid";
import MusicGeneration from "./components/MusicGeneration/MusicGeneration";
import SentimentAnalysis from "./components/SentimentAnalysis/SentimentAnalysis";
import CaptionBot from "./components/CaptionBot/CaptionBot";
import "./App.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={HomePage} />
        <Route path="/covid" exact component={Covid} />
        <Route path="/musicgeneration" exact component={MusicGeneration} />
        <Route path="/sentimentanalysis" exact component={SentimentAnalysis} />
        <Route path="/captionbot" exact component={CaptionBot} />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
