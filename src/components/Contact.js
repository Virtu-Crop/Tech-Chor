import React from "react";
import Navbar from "./Navbar";
import { Button } from "bootstrap";

const Contact = () => {
  function login(){
    
      <form action="">
        <input type="text" name="name" id="" />
      </form>
    

  } 
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "30px" }}>
        <h1 style={{textAlign:'center'}}><b> Join us today</b></h1>
        <div>
          <p
            style={{
              fontSize: "22px",
              paddingLeft: "40px",
              paddingTop: "20px",color:'white'
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
          style={{ fontSize: "22px", paddingLeft: "40px", paddingTop: "20px",color:'white' }}
        >
          Let's code, create, and change the world together. Join TechChor,
          where passion meets innovation!
        </p>
        <div className="button" style={{textAlign:'center'}}>
        <button className="login" onClick={login}>Login</button>
        <button className="signup" >Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
