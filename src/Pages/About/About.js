import React, { useRef,useEffect } from 'react';
import Navbar from '../../components/Navbar/Navigation';
import Dots from 'vanta/src/vanta.dots';
import './About.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
const About = () => {
  const vantaRef = useRef(null);
  useEffect(() => {
    const vantaEffect = Dots({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      backgroundColor:0x000000,
      minHeight: 1200.00,
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
    
    {/* <Navbar/> */}
    <div ref={vantaRef}>
    <div style={{paddingTop:'30px'}}  >
     <h1 style={{textAlign:'Left', paddingTop:'80px', fontSize:'70px', color:'#afff00', paddingLeft:'30px'}}><b>Who we are </b></h1>
     <p style={{ fontSize: "20px" , paddingLeft:'40px',paddingTop:'20px',color:'white', paddingRight:'500px'}}> TECHCHOR is not just a platform.
     We are a family of tech Choristers, each with a unique melody of skills and ideas.
     Our community brings together students from diverse backgrounds and disciplines,
      all connected by the shared love for technology.Here, you will find mentors, peers, 
      and friends who share your enthusiasm and drive 
     to learn and create.
     <br></br>
    <br></br>
     TECHCHOR, the student community, is dedicated to providing virtual internship opportunities that bridge the gap between academic 
     learning and real-world tech experience. We offer diverse virtual internships across various domains, from software development to 
     data science and cybersecurity. Through our partnerships with tech companies and industry professionals, we ensure exclusive opportunities 
     for our members. We provide guidance and support throughout the application process, assisting students with resume refinement and interview 
     preparation. Our focus on mentorship, feedback, and hands-on projects fosters skill development, professional growth, and networking opportunities, 
     empowering students to become well-rounded professionals in the ever-evolving tech landscape.
     </p>
    </div>

    <div style={{paddingTop:'0px'}}  >
     <h1 style={{textAlign:'right', paddingTop:'95px', paddingRight:'50px',fontSize:'70px', color:'#afff00', paddingLeft:'30px'}}><b>TechChor internship program</b></h1>
     <p style={{ fontSize: "20px" , paddingLeft:'475px',paddingTop:'20px',color:'white', paddingRight:'50px'}}> TECHCHOR is not just a platform.
     TECHCHOR, the student community, is dedicated to providing virtual internship opportunities that bridge the gap between academic learning 
     and real-world tech experience. We offer diverse virtual internships across various domains, from software development to data science and 
     cybersecurity. Through our partnerships with tech companies and industry professionals, we ensure exclusive opportunities for our members.
      We provide guidance and support throughout the application process, assisting students with resume refinement and interview preparation. 
      Our focus on mentorship, feedback, and hands-on projects fosters skill development, professional growth, and networking opportunities, 
      empowering students to become well-rounded professionals in the ever-evolving tech landscape.
     </p>
    </div>
    </div>
    </>
  )
}

export default About
