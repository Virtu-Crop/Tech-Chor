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
                  <b>Learning Hub</b>
                </h3>
              
              <p className="card-text">
                Dive into our extensive library of tutorials, articles, and
                video lessons covering a wide array of topics such as
                programming languages, web development, artificial intelligence,
                and more. Whether you are a beginner or an advanced learner, our
                resources cater to all levels of expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-transparent text-dark ">
            <div className="card-body">
              
                <h3>
                  <b>Project Collaboration</b>
                </h3>
              
              <p className="card-text">
                Bring your ideas to life by collaborating with fellow TechChor
                members on exciting projects. Our platform connects you with
                like-minded individuals, allowing you to work together on
                innovative tech ventures, expand your portfolio, and gain
                practical experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-transparent text-dark">
            <div className="card-body ">
            
                <h3>
                  <b>Workshops and Webinars</b>
                </h3>
              
              <p className="card-text">
                <span>
                Participate in our interactive workshops and webinars conducted
                by industry experts. Learn about the latest trends, tools, and
                technologies shaping the tech landscape. These sessions provide
                valuable insights and hands-on experience that can enhance your
                skills and boost your confidence.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-transparent text-dark">
            <div className="card-body">
            
                <h3>
                  <b>Hackathons and Competitions</b>
                </h3>
              
              <p className="card-text">
                Challenge your problem-solving abilities and creativity by
                participating in our hackathons and competitions. These events
                provide a platform to showcase your skills, compete with peers
                globally, and win exciting prizes. It's not just about winning;
                it's about the knowledge you gain.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-transparent text-dark">
            <div className="card-body">
            
                <h3>
                  <b>Community Forum</b>
                </h3>
              
              <p className="card-text">
                Engage in meaningful discussions, seek help, and share your
                knowledge on our community forum. Ask questions, provide
                solutions, and connect with experts and enthusiasts from around
                the world. Our forum is a supportive space where ideas flourish,
                and friendships are forged.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-transparent text-dark">
            <div className="card-body">
            
                <h3>
                  <b>Career Guidance</b>
                </h3>
              
              <p className="card-text">
                Navigate your future with confidence with our career guidance
                resources. From resume building to interview preparation, we
                provide valuable tips and insights to help you land internships,
                co-op opportunities, and full-time positions in the tech
                industry.
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
