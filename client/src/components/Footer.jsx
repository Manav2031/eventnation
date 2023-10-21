import React from 'react'
import {BsFacebook } from "react-icons/bs";

import {FaTwitterSquare } from "react-icons/fa";
import {BsLinkedin } from "react-icons/bs";
import {FaGooglePlay} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {BiSolidMap} from "react-icons/bi";
import {BsFillTelephoneFill } from "react-icons/bs";
import {MdEmail } from "react-icons/md";

import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
  
    //    <div className="container-fluid bg-dark text-light footer" >
    //         <div className="container py-5">
    //             <div className="row g-5">
    //                 <div className="col-lg-3 col-md-6">
    //                     <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4"></h4>
    //                     <Link className="btn btn-link" to="/About">About Us</Link>
    //                     <Link className="btn btn-link" to="/Contact">Contact Us</Link>
    //                     <Link className="btn btn-link" to="/">Privacy Policy</Link>
    //                     <Link className="btn btn-link" to="/">Terms & Condition</Link>
    //                 </div>
    //                 <div className="col-lg-3 col-md-6">
    //                     <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
    //                     <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>S.R. No.27,PICT Pune</p>
    //                     <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 45585858</p>
    //                     <p className="mb-2"><i className="fa fa-envelope me-3"></i>eventnation@gmail.com</p>
    //                     <div className="d-flex mt-5">
    //                         <Link style={{marginRight:'1rem'}} className="btn btn-outline-light btn-social" to="/"><i className="fab fa-twitter"></i></Link>
    //                         <Link style={{marginRight:'1rem'}} className="btn btn-outline-light btn-social" to="/"><i className="fab fa-facebook-f"></i></Link>
    //                         <Link style={{marginRight:'1rem'}} className="btn btn-outline-light btn-social" to="/"><i className="fab fa-youtube"></i></Link>
    //                         <Link style={{marginRight:'1rem'}} className="btn btn-outline-light btn-social" to="/"><i className="fab fa-linkedin-in"></i></Link>
    //                     </div>
    //                 </div>
    //                 <div className="col-lg-3 col-md-6">
    //                     <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Join Us</h4>
    //                     <p>Join the best event booking website!</p>
    //                     <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
    //                         <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
    //                       <Link to='/Signup'> <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button></Link> 
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="container">
    //             <div className="copyright">
    //                 <div className="row">
    //                     <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
    //                         &copy; <Link  to="/">EVENT NATION</Link>, All Right Reserved. 
    //                     </div>
    //                      <div className="col-md-6 text-center text-md-end">
    //                     </div> 
    //                 </div> 
    //             </div>
    //         </div>
    //     </div>
    <footer class="footer-distributed">

          <div class="footer-left">

            <h3>EVENTNATION<span></span></h3>

            <p class="footer-links">
              <a href="#" class="link-1">Home</a>
              
              <a href="#">Blog</a>
            
              <a href="#">Pricing</a>
            
              <a href="#">About</a>
              
              <a href="#">Faq</a>
              
              <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">Eventnation © 2023</p>
          </div>

          <div class="footer-center">

            <div>
              <BiSolidMap />
              <p> PICT,Pune</p>
            </div>

            <div>
              <BsFillTelephoneFill  />
              <p>+1.555.555.5555</p>
            </div>

            <div>
              <MdEmail />
              <p><a href="mailto:support@company.com">support@eventnation.com</a></p>
            </div>

          </div>

          <div class="footer-right">

            <p class="footer-company-about">
              <span>About the company</span>
              A Platform for Booking Tickets for different Events and also organizing the same.
            </p>

            <div class="footer-icons">

              <a href="#"><BsFacebook /></a>
              <a href="#"><FaTwitterSquare /></a>
              <a href="#"><BsLinkedin /></a>
              <a href="#"><AiFillInstagram /></a>

            </div>

          </div>

      </footer>

  )
}

export default Footer