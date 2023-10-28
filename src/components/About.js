import React from 'react'
import Navbar from './Navbar'
const About = () => {
  return (
    <>
    
    <Navbar/>
    <div style={{paddingTop:'30px'}}>
     <h1 style={{textAlign:'center', paddingTop:'60px', fontSize:'60px'}}><b>Who we are</b></h1>
     <p style={{ fontSize: "22px" , paddingLeft:'40px',paddingTop:'20px',color:'white', fontSize:'25px'}}> TechChor is not just a platform.
     We are a family of tech Choristers, each with a unique melody of skills and ideas.
     Our community brings together students from diverse backgrounds and disciplines, all connected by the shared love for technology.
     Here, you will find mentors, peers, and friends who share your enthusiasm and drive to learn and create.
     </p>
    </div>
    
    </>
  )
}

export default About
