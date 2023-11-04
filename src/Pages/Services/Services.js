import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navigation";
import Dots from 'vanta/src/vanta.dots';
import './Services.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../../components/Footer/Footer";
const Services = () => {
  const vantaRef =useRef(null);
  useEffect(()=>{
    const vantaEffect = Dots({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 1000,
      backgroundColor:0x000000,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x4b9845,
      showLines: false})
      return () => {
        // Clean up the effect when the component unmounts
        vantaEffect.destroy();
      };},[])
  return (
    <>
      {/* <Navbar /> */}
      <div className="services-page" ref={vantaRef}  >
        <h1 >
          <b>What We Offer</b>
        </h1>
      
      <div className="row row-cols-2 row-cols-sm-1 row-cols-md-2 g-4 m-5">
        <div className="col ">
          <div className="card bg-transparent text-dark">
            <div className="card-body">
              
                <h3>
                  <b>Networking Opportunities</b>
                </h3>
              
              <p className="card-text">
              Student communities bring together individuals with common interests, 
	            allowing for the development of strong and diverse networks. 
              These connections can lead to friendships,
	            mentorships, and future professional collaborations.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-transparent text-dark ">
            <div className="card-body">
              
                <h3>
                  <b>Access to Resources</b>
                </h3>
              
              <p className="card-text">
              Student communities might have access to resources not readily available to individuals,
	            such as special libraries, research materials, or specific equipment for projects and experiments.

              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-transparent text-dark">
            <div className="card-body ">
            
                <h3>
                  <b>Personal Growth</b>
                </h3>
              
              <p className="card-text">
                <span>
                Through involvement in a community, students can develop soft skills such as communication, 
              	teamwork, time management, and problem-solving, all of which are invaluable in their personal and professional lives.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-transparent text-dark">
            <div className="card-body">
            
                <h3>
                  <b>Hands-on Experience</b>
                </h3>
              
              <p className="card-text">
              Internships arranged through student communities allow members to gain practical, 
	            hands-on experience in their field of study. This practical exposure often complements 
              theoretical knowledge obtained in classrooms.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-transparent text-dark">
            <div className="card-body">
            
                <h3>
                  <b>Future Employment Opportunities</b>
                </h3>
              
              <p className="card-text">
              Many internships can lead to full-time job offers or serve as a gateway to employment after graduation.
	            Students who perform well during their internship may be offered permanent positions within the company.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-transparent text-dark">
            <div className="card-body">
            
                <h3>
                  <b>Community Forum</b>
                </h3>
              
              <p className="card-text">
              Engage in meaningful discussions, seek help, and share your knowledge on our community forum. 
              Ask questions, provide solutions, and connect with experts and enthusiasts.
               Our forum is a supportive space where ideas flourish, and friendships are forged.
              </p>
            </div>
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Services;
