import React, { useState, useEffect, useRef } from 'react';
import DOTS from 'vanta/dist/vanta.dots.min';
import HomeButton from '../HomeButton';

const Vanta = () => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc5b8bb,
        backgroundColor: 0x1d1a22,
        maxDistance: 19.00,
        spacing: 20.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
  <div ref={myRef} id = "effect">
    <div id = "covid-head-div">
        <h1 id = "header">Covid Detection Using Chest X-Rays</h1>
    </div>
    <div id = "home-btn">
      <HomeButton />
    </div>
  </div>
  );
}

export default Vanta;