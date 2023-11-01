import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NET from "vanta/src/vanta.net";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Home.scss";
const Home = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight:800.00,
      top: 100.0,
      paddingTop: -100.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xafff00,
      backgroundColor: 0x00000,
      points: 8.0,
      maxDistance: 16.0,
      spacing: 11.0,
      paddingLeft: 50.0,
      size: 2,
      showDots: false,
     
  
    });

    return () => {
      // Clean up the effect when the component unmounts
      vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-page" ref={vantaRef}>
        <div
          className="child"
          style={{ paddingTop: "40px", color: "#afff00", paddingLeft: "30px" }}
        >
          <h1>
            <b style={{ textAlign: "left", fontSize: "60px" }}>
              Welcome to TECHCHOR{" "}
            </b>
            <br />
            <br />
            <b style={{ textAlign: "left", fontSize: "40px" }}>
              Empowering Student Innovators!
            </b>
          </h1>
          <p
            style={{
              fontSize: "20px",
              paddingLeft: "0px",
              paddingTop: "20px",
              color: "white",
            }}
          >
            At TechChor, we believe in the power of innovation, collaboration,
            and knowledge sharing. We are more than just a student community; we
            are a vibrant ecosystem of tech enthusiasts, programmers, designers,
            and innovators coming together to shape the future. Whether you're a
            beginner with a passion for technology or an experienced coder
            looking to expand your horizons, TechChor is the perfect place for
            you.
          </p>
          <Link to="/contact" className="button">
            {" "}
            BECOME A TECHCHOR
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
