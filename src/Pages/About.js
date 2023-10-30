import React, { useRef,useEffect } from 'react';
import Navbar from '../components/Navbar';
import Dots from 'vanta/src/vanta.dots'
const About = () => {
  const vantaRef = useRef(null);
  useEffect(() => {
    const vantaEffect = Dots({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      backgroundColor:0x000000,
      minHeight: 1000.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x4b9845,
      showLines: false
    });

    return () => {
      // Clean up the effect when the component unmounts
      vantaEffect.destroy();
    };
  }, []);
  
  return (
    <>
    <Navbar/>
    <div ref={vantaRef}>
    <div style={{paddingTop:'30px'}}  >
     <h1 style={{textAlign:'center', paddingTop:'90px', fontSize:'70px', color:'#afff00'}}><b>Who we are</b></h1>
     <p style={{ fontSize: "20px" , paddingLeft:'40px',paddingTop:'20px',color:'white'}}> TechChor is not just a platform.
     We are a family of tech Choristers, each with a unique melody of skills and ideas.
     Our community brings together students from diverse backgrounds and disciplines, all connected by the shared love for technology.
     Here, you will find mentors, peers, and friends who share your enthusiasm and drive to learn and create.
     </p>
    </div>
    
    </div> 
    </>
  )
}

export default About
