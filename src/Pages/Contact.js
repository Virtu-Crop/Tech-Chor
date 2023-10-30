import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import GLOBE from "vanta/src/vanta.globe";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const Contact = () => {
  
  const vantaRef = useRef(null);
  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.0,
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
      size: 1,
    });

    return () => {
      // Clean up the effect when the component unmounts
      vantaEffect.destroy();
    };
  }, []);
  
  return (
    <>
    <div >
      <Navbar />
      <Container ref={vantaRef} className="con position-fixed">
        <Row  style={{
        paddingLeft:'80px'}}>
        <Col style={{
        paddingLeft:'10px',
        paddingTop:'150px',
        }} >
          <h1>
           <b style={{
            fontSize:'60px',
            color:'#afff00'
           }}> Join us today</b>
            </h1>
            <p className="h4 pt-5" style={{
              fontSize:'22px'
            }}>
              Are you ready to embark on a journey of learning, collaboration,
              and innovation? Join Techchor today and become a part of a dynamic
              community that believes in the transformative power of technology.
              Whether you are a student dreaming of changing the world or a
              professional looking to mentor the next generation, TechChor
              welcomes you with open arms.
            </p>
            <p className="h4">
              Let's code, create, and change the world together. Join TechChor,
              where passion meets innovation!
            </p>
            <div className="but" style={{paddingTop:'20px'}}>
              {/* <Button variant="outline-success">Sign IN</Button>{" "}
              <Button variant="outline-success">Sign UP</Button>{" "} */}
              <Link to='/sign-in' className="button"> SIGN IN</Link>
              <Link to='/sign-up' className="button"> SIGN UP</Link>
            </div>
          </Col>
          <Col  className="col  pt-2 justify-content-md-center" ></Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Contact;
