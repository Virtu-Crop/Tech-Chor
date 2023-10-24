import React, { useEffect,useRef } from "react";
import Navbar from "./Navbar";
// import NET from 'vanta/src/vanta.net'
import * as THREE from 'three';
const Home = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // Set up your 3D objects, lights, and materials here

    // Append the renderer to the component's container
    containerRef.current.appendChild(renderer.domElement);

    // Render loop
    const animate = () => {
      // Update the 3D scene here

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);



  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "30px" }}>
        <h1 style={{ textAlign: "center" }}>
          <b>Welcome to TechChor: Empowering Student Innovators!</b>
        </h1>
        <p style={{ fontSize: "22px" , paddingLeft:'40px',paddingTop:'20px',color:'white'}}>
          At TechChor, we believe in the power of innovation, collaboration, and
          knowledge sharing. We are more than just a student community; we are a
          vibrant ecosystem of tech enthusiasts, programmers, designers, and
          innovators coming together to shape the future. Whether you're a
          beginner with a passion for technology or an experienced coder looking
          to expand your horizons, TechChor is the perfect place for you.
        </p>
      </div>
    </>
  );
};

export default Home;
