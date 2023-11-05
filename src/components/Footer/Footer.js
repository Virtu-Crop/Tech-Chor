import React from "react";
import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoS from "./../images/logo1.png";
const Footer = () => {
  return (
    // <FooterContainer className="main-footer">
    //   <div className="footer-middle">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-3 col-sm-6">
    //           <h3>content</h3>
    //           <ul className="list-unstyled">
    //             <li>some</li>
    //             <li>some</li>
    //           </ul>
    //         </div>
    //         <div className="col-md-3 col-sm-6">
    //           <h3>content</h3>
    //           <ul>
    //             <li>some</li>
    //             <li>some</li>
    //           </ul>
    //         </div>
    //         <div className="col-md-3 col-sm-6">
    //           <h3>content</h3>
    //           <ul>
    //             <li>some</li>
    //             <li>some</li>
    //           </ul>
    //         </div>
    //         <div className="col-md-3 col-sm-6">
    //           <h3>content</h3>
    //           <ul>
    //             <li>some</li>
    //             <li>some</li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="footer-bottom">
    //         <p className="text-xs-center">
    //           &copy;{new Date().getFullYear()} All rights Reserved
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </FooterContainer>
    <div className="main-footer">
    <div className="container">
      <div className="row">

        {/* Column1 */}
        <div className="col">
          
         
        <img className="logo" src={LogoS} alt="" style={{width:'250px', padding:'0px', margin:'0px'}}/>
        <hr />
          <h1 className="list-unstyled" style={{paddingLeft:'15px', fontSize:'18px'}}>
            <li>320, Gera's Imperium Rise,</li>
            <li>Hinjawadi Phase II, Pimpri-Chinchwad,</li>
            <li>Maharashtra 411057</li>
          </h1>
          <br></br>
          <h1 style={{paddingLeft:'15px', fontSize:'20px'}}>Email : hello@techchor.com</h1>
          
        </div>
        {/* Column2 */}
        <div className="col" style={{paddingTop:'25px', paddingLeft:'100px'}}>
          <h4 style={{fontSize:'30px', paddingBottom:'18px', fontWeight:'bold'}}>Useful Links</h4>
          <hr />
          <ui className="list-unstyled" >
          <Link to="/" style={{textDecoration:'none', fontSize:'18px', color:'#fff'}}>
          <li>Home</li>
          </Link>

          <Link to="/services"  style={{textDecoration:'none', fontSize:'18px', color:'#fff'}}>
          <li>Our Services</li>
          </Link>

          <Link to="/about"  style={{textDecoration:'none', fontSize:'18px', color:'#fff'}}>
          <li>About Us</li>
          </Link>

          <Link to="/contact"  style={{textDecoration:'none', fontSize:'18px', color:'#fff'}}>
          <li>Contact Us</li>
          </Link>

          </ui>
        </div>
        {/* Column3 */}
        <div className="col" style={{paddingTop:'25px', paddingLeft:'100px'}}>
          <h4 style={{fontSize:'30px', paddingBottom:'18px', fontWeight:'bold'}}>Our Products</h4>
          <hr />
          <ui className="list-unstyled">

          <Link to="" style={{textDecoration:'none', fontSize:'18px', color:'#fff'}}>
          <li>CoinXHub</li>
          </Link>

          <Link to="" style={{textDecoration:'none', fontSize:'18px', color:'#fff'}}>
          <li>EvolveAir</li>
          </Link>

          </ui>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} VIRTUCROP PVT. LTD. | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
    );
};

export default Footer;
