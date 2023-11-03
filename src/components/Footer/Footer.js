import React from "react";
import "./Footer.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <h4>THICC MEMES INC</h4>
          <h1 className="list-unstyled">
            <li>342-420-6969</li>
            <li>Moscow, Russia</li>
            <li>123 Streeet South North</li>
          </h1>
        </div>
        {/* Column2 */}
        <div className="col">
          <h4>Stuff</h4>
          <ui className="list-unstyled">
            <li>DANK MEMES</li>
            <li>OTHER STUFF</li>
            <li>GUD STUFF</li>
          </ui>
        </div>
        {/* Column3 */}
        <div className="col">
          <h4>WELL ANOTHER COLUMN</h4>
          <ui className="list-unstyled">
            <li>DANK MEMES</li>
            <li>OTHER STUFF</li>
            <li>GUD STUFF</li>
          </ui>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
    );
};

export default Footer;
