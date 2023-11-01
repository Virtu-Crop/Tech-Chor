import React from "react";
import "./Contact.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import GLOBE from "vanta/src/vanta.globe";
import "bootstrap/dist/css/bootstrap.min.css";
const Contact = () => {
  const vantaRef = useRef(null);
  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 960.0,
      Width: 90.0,
      top: 100.0,
      paddingTop: -100.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xafff00,
      backgroundColor: 0x00000,
      points: 0.0,
      maxDistance: 16.0,
      spacing: 1.0,
      paddingLeft: 80.0,
      size: 0.7,
    });

    return () => {
      // Clean up the effect when the component unmounts
      vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="contact" ref={vantaRef}>
        <h1>
          <b
            style={{
              fontSize: "60px",
              color: "#afff00",
            }}
          >
            {" "}
            Join us today
          </b>
        </h1>
        <p
          className="para  pt-5"
          
        >
          Are you ready to embark on a journey of learning, collaboration, and
          innovation? Join Techchor today and become a part of a dynamic
          community that believes in the transformative power of technology.
          Whether you are a student dreaming of changing the world or a
          professional looking to mentor the next generation, TechChor welcomes
          you with open arms.
        </p>
        <p className="para ">
          Let's code, create, and change the world together. Join TechChor,
          where passion meets innovation!
        </p>
        <div className="but" style={{ paddingTop: "20px" }}>
          {/* <Button variant="outline-success">Sign IN</Button>{" "}
              <Button variant="outline-success">Sign UP</Button>{" "} */}
          <Link to="/login" className="butt">
            {" "}
            Login In
          </Link>
          <Link to="/signup" className="butt">
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
