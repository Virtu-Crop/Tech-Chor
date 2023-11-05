import React, { useEffect, useRef } from "react";
import halo from "vanta/src/vanta.halo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./Home.scss";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navbar/Navigation";
const Home = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = halo({
      el: vantaRef.current,
      mouseControls: false,
      touchControls:false,
      gyroControls: false,
      minHeight: 1000.00,
      minWidth: 200.00,
      baseColor: 0xdff61,
      backgroundColor: 0x0,
      amplitudeFactor: 5.00,
      xOffset: 0.21,
      yOffset: 0.1,
      size: 0.8
    });

    return () => {
      // Clean up the effect when the component unmounts
      vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <Navigation />
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
            <b style={{ textAlign: "left", fontSize: "35px" }}>
              Empowering Student Innovators!
            </b>
          </h1>
          <p
            style={{
              fontSize: "20px",
              
              paddingLeft: "0px",
              paddingTop: "15px",
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
      <Footer/>
    </>
  );
};

export default Home;
