import React from 'react';
import './Home.css'
import Footer from './Footer.jsx'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { BiCycling } from "react-icons/bi";
import { FaChess } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { BsPeopleFill} from "react-icons/bs";
import { FaHospitalUser } from "react-icons/fa6";
import {BsFacebook } from "react-icons/bs";

// import {FaTwitterSquare } from "react-icons/fa";
// import {BsLinkedin } from "react-icons/bs";
// import {FaGooglePlay} from "react-icons/fa";
// import {AiFillInstagram} from "react-icons/ai";
// import {BiSolidMap} from "react-icons/bi";
// import {BsFillTelephoneFill } from "react-icons/bs";
// import {MdEmail } from "react-icons/md";
// import { Link } from 'react-router-dom';




// const HomePage = () => {
//   return (
//     <div style = {{ backgroundImage: 'url("https://wallpapercave.com/wp/wp2848076.jpg")', opacity: '0.8' }}>
//       <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ boxShadow: '0px 0px 7px 2px grey' }}>
//         <div className="carousel-inner">
//           <div className="carousel-item active" data-bs-interval="10000">
//             <img src="https://wallpapercave.com/wp/wp7488226.jpg" className="d-block w-100" style={{ height: "30rem" }} alt="..." />
//             <div className="carousel-caption d-none d-md-block">
//               <h5 style={{ fontFamily: 'Castoro Titling' }}>"Find your best host for the event"</h5>
//               <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}></p>
//             </div>
//           </div>
//           <div className="carousel-item" data-bs-interval="2000">
//             <img src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" style={{ height: "30rem" }} alt="..." />

//             <div className="carousel-caption d-none d-md-block">
//               <h5 style={{ fontFamily: 'Castoro Titling' }}>Unveil the celebration!</h5>
//               <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}></p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="https://media.istockphoto.com/id/1329410603/photo/large-group-of-people-at-a-concert-party.jpg?b=1&s=170667a&w=0&k=20&c=mPa6HlEFCBh8rT4kt611m56ha8HwDxMO6aKZBqAJe0c=" className="d-block w-100" style={{ height: "30rem" }} alt="..." />
//             <div className="carousel-caption d-none d-md-block">
//               <h5 style={{ fontFamily: 'Castoro Titling' }}>Enjoy to the fullest!</h5>
//               <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}></p>
//             </div>
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>  
//       <div className="container mt-4">
//         <h1  style={{ color: 'white' }}>Welcome to Event Nation</h1>
//         <p  style={{ color: 'white' }}>Plan and organize your events with ease.</p>

//         <div className="card mt-4">
//           <div className="row no-gutters">
//             <div className="col-md-4">
//               <img src="https://freedesignfile.com/upload/2016/10/Cheering-crowd-at-a-rock-concert-HD-picture-01.jpg" className="card-img" alt="Image" />
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h5 className="card-title">OUR WORK</h5>
//                 <p className="card-text">At Event Nation, we strive to provide exceptional event management services tailored to meet your specific requirements. Our website offers a comprehensive platform for planning and organizing various types of events, including corporate conferences, weddings, parties, and more.</p>
//                 <p className="card-text">With our user-friendly interface, you can easily browse through different event categories, explore upcoming and past events, and get detailed information about each event. Our team of skilled professionals is dedicated to ensuring a seamless and memorable event experience for both event organizers and attendees.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-4">
//           <h2 style={{ color: 'white' }}>Ready to Book an Event?</h2>
//           <p style={{ color: 'white' }}>Explore our upcoming events and secure your spot now!</p>
//           <a href="/event-details" className="btn btn-primary">Browse Events</a>
//         </div>
//       </div>
//     </div>
//   );
// };

const HomePage=() =>
{
  return(
    <>

      <div className='hero'>
        <div className='content'>
         
          <h1>EventNation</h1>
          
          
          
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" Seize the <span>Ticket</span></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Seize the <span>Moment</span> "</p>
          
        </div>
        {/* <Link className="asdfg" to="/event-details">Browse Events</Link> */}
        <button className="asdfg" >Browse Events</button>
        <div className='down'>
        </div>
      </div>
      <div className='elist'>
        <p>Event Management for all kind of Events</p>
      </div>
      <div className='cont'>
        <div className='c'><FaGuitar className="icons" /><p>Entertainment</p></div>
        <div className='c'><FaChess className='icons' /><p>Sports and Games</p></div>
        <div className='c'><FaUsers className='icons' /><p>Meetups</p></div>
        <div className='c'><BiCycling className='icons' /><p>Fitness</p></div>
        <div className='c'><FaHeadset className='icons' /><p>Conferences</p></div>
        <div className='c'><FaUserGraduate className='icons' /><p>College Festivals</p></div>
      </div>
      <div className='info'>
       
          <div className='ticketimg'><img src="https://i.postimg.cc/XvFGcWyP/TICKET-EDITED.png" alt="" /></div>
        
        <div className='workdetails'>
        <h1>OUR WORK</h1>
          <p>At Event Nation, we strive to provide exceptional event management services tailored to meet your specific requirements. Our website offers a comprehensive platform for planning and organizing various types of events, including corporate conferences, weddings, parties, and more. With our user-friendly interface, you can easily browse through different event categories, explore upcoming and past events, and get detailed information about each event. Our team of skilled professionals is dedicated to ensuring a seamless and memorable event experience for both event organizers and attendees.</p></div>
      </div>
      <div class="logininfo">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
        <div className='mainlogininfo'>
          <div className='bglogin'>
            <img src="https://i.postimg.cc/DZZ8KMYJ/Privacy-policy-rafiki.png" alt="" />
          </div>
          <div className='qwe'>
            <div className='e eventmanager'>
            
                <FaHospitalUser className='ty'/>
                <div className='title'>
                  <h1>LOGIN</h1>
                  <h3>AS EVENTMANAGER</h3>
                </div>
           
              
              
      
              <p>"Ready to organize unforgettable events? Log in as an Event Manager and get started."</p>
              <button>Login</button>
            </div>
            <div className='e enduser'>
             
                <BsPeopleFill className='ty' />
                <div className='title'>
                  <h1>LOGIN</h1>
                  <h3>AS ENDUSER</h3>
                </div> 
                
           
              
              <p>"Don't miss out on the latest events. Log in to your account to secure your tickets."</p>
              <button>Login</button>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
      
     
      
    </>
  );
};
 
export default HomePage;
