import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';

const Vanta = () => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
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
    <div id = "HomePage-head-div"><h1 id = "header">Himanshu Dhiman</h1></div>
  </div>
  );
}

export default Vanta;