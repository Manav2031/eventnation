import React from 'react';
import './Navbar.css'


// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg ">
//         <a className="navbar-brand" href="/">Event Nation</a>
//         {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button> */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="/">Home</a>
//             </li>
//             <li className="nav-item ">
//               <a className="nav-link" href="/event-details" >
//                 Events
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   )
// }
const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="ticket"><path fill="#CCC" d="M61 17c-1.654 0-3-1.346-3-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1c0 1.654-1.346 3-3 3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1c1.654 0 3 1.346 3 3a1 1 0 0 0 1 1h50a1 1 0 0 0 1-1c0-1.654 1.346-3 3-3a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1z"></path><path fill="#454C54" d="M42 17h2v2h-2zM42 21h2v2h-2zM42 25h2v2h-2zM42 29h2v2h-2zM42 33h2v2h-2zM42 37h2v2h-2zM42 41h2v2h-2zM42 45h2v2h-2z"></path><g fill="#454C54"><path d="M39 17H10a1 1 0 0 0-1 1c0 1.103-.897 2-2 2a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1c1.103 0 2 .897 2 2a1 1 0 0 0 1 1h29a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1zM57 20c-1.103 0-2-.897-2-2a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1c0-1.103.897-2 2-2a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1z"></path></g><path fill="#FFF" d="M12 21h24v2H12zM22 25h14v2H22zM18.001 25H20v2h-1.999zM10 25h6v2h-6zM10 29h26v2H10zM10 33h26v2H10zM10 37h26v2H10zM12 41h24v2H12z"></path></svg><a href="#">EventNation</a></div>
      <ul className='links'>
        <li><a href="/">Home</a></li>
        <li><a href="/event-details">Events</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <a href="#" className='action-btn'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Login
      </a>
    </div>
  )
}

export default Navbar
