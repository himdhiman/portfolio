import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import HomeButton from "../HomeButton";
import Run from "./Run";

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0xc1836,
          backgroundColor: 0xb0b0c,
          amplitudeFactor: 3.0,
          xOffset: 0.17,
          yOffset: -0.05,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} id="music-effect">
      <div id="covid-head-div">
        <h1 id="music-header">Music Generation</h1>
      </div>
      <div id="music-home-btn">
        <HomeButton />
      </div>
      <div>
        <Run />
      </div>
    </div>
  );
};

export default Vanta;
