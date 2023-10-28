import React from "react";
import Navbar from "./Navbar";
import {useRef,useEffect} from "react";
import GLOBE from 'vanta/src/vanta.globe'
import  Button from "react-bootstrap/Button";
// import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current, 
      mouseControls: true, 
      touchControls: true, 
      gyroControls: false,
      minHeight: 600.00,
      Width: 90.00,
      top:100.00,
      paddingTop: -100.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xafff00,
      backgroundColor: 0x00000,
      points: 0.00,
      maxDistance: 16.00,
      spacing: 1.00,
      paddingLeft:80.00,
      size:2
      
       });

    return () => {
      // Clean up the effect when the component unmounts
      vantaEffect.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="contact-page">
      <div className="text-area" style={{ paddingTop: "80px" }}>
        <h1 style={{textAlign:'center', fontSize:'60px'}}><b> Join us today</b></h1>
        <div>
          <p
            style={{
              fontSize: "22px",
              paddingRight:'90px',
              paddingLeft:'30px',color:'white'
            }}
          >
            Are you ready to embark on a journey of learning, collaboration, and
            innovation? Join Techchor today and become a part of a dynamic
            community that believes in the transformative power of technology.
            Whether you are a student dreaming of changing the world or a
            professional looking to mentor the next generation, TechChor
            welcomes you with open arms.
          </p>
        </div>

        <p
          style={{ fontSize: "22px", paddingRight:'90px',
          paddingLeft:'30px',color:'white' }}
        >
          Let's code, create, and change the world together. Join TechChor,
          where passion meets innovation!
        </p>
        <div className="button"  >
        <Button variant="outline-success">Sign IN</Button>{' '}
        <Button variant="outline-success">Sigh UP</Button>{' '}
        </div>
      </div>
      <div ref={vantaRef} className="child1" >
      </div>
      </div>
    </>
  );
};

export default Contact;