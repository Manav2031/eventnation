
//old code

// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faLinkedin, faReddit } from '@fortawesome/free-brands-svg-icons';
// import "./eventDetails.css"

// export default function EventDetails() {

//     const shareUrl = 'http://localhost:3000/event-details';
//     const shareTitle = 'Join me at SpaceCon!';
//     return (
//         <div className="event-details">
//             <h1 align="center">spaceCon</h1>
//             <p align="center">Join us for the premier conference for space enthusiasts and professionals, where we explore the latest developments in space technology, research, and exploration.</p>
//             <h2 align="center">Event Details:</h2>
//             <ul align="center">
//                 <li align="center"><strong>Event Name:</strong> SpaceCon</li>
//                 <li align="center"><strong>Date:</strong> July 15-17, 2023</li>
//                 <li align="center"><strong>Location:</strong> PICT ,Pune</li>
//             </ul>
//             <h2 align="center">Share:</h2>
//       <ul className="share-buttons">
//         <li>
//           <a href={`https://www.facebook.com/sharer.php?u=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//         </li>
//         <li>
//           <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//         </li>
//         <li>
//           <a href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//         </li>
//         <li>
//           <a href={`https://www.reddit.com/submit?url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faReddit} />
//           </a>
//         </li>
//       </ul>
//             <h2 align="center">Speakers:</h2>
//             <ul>
//                 <li align="center">Dr. Mae Jemison, the first woman of color to go to space</li>
//                 <li align="center"> Elon Musk, founder of SpaceX</li>
//                 <li align="center">Jeff Bezos, founder of Blue Origin</li>
//                 <li align="center">Bill Nye, science educator and CEO of The Planetary Society</li>
//                 <li align="center">Dr. Ellen Stofan, Director of the Smithsonian's National Air and Space Museum</li>
//             </ul>
//             <h2 align="center">Agenda:</h2>
//             <p align="center">The three-day event will include keynote speeches, panel discussions, and interactive sessions covering topics such as:</p>
//             <ul align="center">
//                 <li align="center">Commercial space exploration</li>
//                 <li align="center">The future of space tourism</li>
//                 <li align="center">Advances in rocket technology</li>
//                 <li align="center">Sustainable space habitats</li>
//                 <li align="center">The search for extraterrestrial life</li>
//                 <li align="center">International collaboration in space exploration</li>
//             </ul>
//             <h2 align="center">Networking:</h2>
//             <p align="center">SpaceCon provides a unique opportunity for attendees to network with industry leaders and peers. Whether you're looking for new business opportunities, career advice, or just want to connect with like-minded individuals, there will be plenty of chances to meet and mingle throughout the event.</p>
//             <h2 align="center">Tickets:</h2>
//             <p align="center">Tickets for SpaceCon are on sale now and can be purchased on our website. Early bird pricing is available until June 15th, so be sure to take advantage of the discount while it lasts!</p>
//             <div className="text-center mt-4">
//                 <h2>Ready to Book an Event?</h2>
//                 <p>Explore our upcoming events and secure your spot now!</p>
//                 <a href="/events" className="btn btn-primary">Book tickets</a>
//             </div>
//         </div>
//     )
// }







//new code1
// import React, { useState, useEffect } from 'react';
// import "./eventDetails.css"

// export default function EventDetails() {
//   const [events, setEvents] = useState([
//     {
//     id:1,
//     name:"Pulzion Closing Ceremony",
//     date:"5/11/23",
//     location:"Main Auditorium",
//     description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj"
//     },
//     {
//       id:1,
//       name:"Pulzion Closing Ceremony",
//       date:"5/11/23",
//       location:"Main Auditorium",
//       description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj"
//     },
//     {
//       id:1,
//       name:"Pulzion Closing Ceremony",
//       date:"5/11/23",
//       location:"Main Auditorium",
//       description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj"
//     },
//     {
//       id:1,
//       name:"Pulzion Closing Ceremony",
//       date:"5/11/23",
//       location:"Main Auditorium",
//       description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj"
//     }

//   ]);

//   // Fetch events from your API endpoint when the component mounts
//   // useEffect(() => {
//   //   async function fetchEvents() {
//   //     try {
//   //       const response = await fetch('/api/events'); // Replace with your actual API endpoint
//   //       if (!response.ok) {
//   //         throw new Error('Network response was not ok');
//   //       }
//   //       const data = await response.json();
//   //       setEvents(data);
//   //     } catch (error) {
//   //       console.error('Error fetching events:', error);
//   //     }
//   //   }

//   //   fetchEvents();
//   // }, []); // The empty array ensures this effect runs only once when the component mounts
  
  
//   return(
//       <div className='eventcards'>
//         <h2 className='t'>UPCOMING EVENTS</h2>
//         <section class="cards-wrapper">
//         {events.map((event) => (
//             <div class="card-grid-space">
//               <a class="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" >
//                 <div>
//                   <h1>{event.name}</h1>
//                   <p>{event.description}</p>
//                   <div class="date">{event.date}</div>
//                   <button  className='tag' >More</button>
//                 </div>
//               </a>
//             </div>
//         ))}

          
          
    
//         </section>


//       </div>
//   );
// };

// new code2

import React, { useState, useEffect } from 'react';
import "./eventDetails.css"

// const [events, setEvents] = useState([
//   {
//   id:1,
//   name:"Pulzion Closing Ceremony",
//   date:"5/11/23",
//   location:"Main Auditorium",
//   description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj"
//   },
//   {
//     id:1,
//     name:"Pulzion Closing Ceremony",
//     date:"5/11/23",
//     location:"Main Auditorium",
//     description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj"
//   },
//   {
//     id:1,
//     name:"Pulzion Closing Ceremony",
//     date:"5/11/23",
//     location:"Main Auditorium",
//     description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj"
//   },
//   {
//     id:1,
//     name:"Pulzion Closing Ceremony",
//     date:"5/11/23",
//     location:"Main Auditorium",
//     description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj"
//   }

// ]);

const events = [
  {
  id:1,
  name:"Pulzion Closing Ceremony",
  date:"5/11/23",
  location:"Main Auditorium",
  description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj",
  available_tickets:200,
  ticket_price:100,
  total_collection:0
},
  {
    id:1,
    name:"Pulzion Closing Ceremony",
    date:"5/11/23",
    location:"Main Auditorium",
    description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj",
    available_tickets:200,
  ticket_price:100,
  total_collection:0
  },
  {
    id:1,
    name:"Pulzion Closing Ceremony",
    date:"5/11/23",
    location:"Main Auditorium",
    description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj",
    available_tickets:200,
  ticket_price:100,
  total_collection:0
  },
  {
    id:1,
    name:" Closing Ceremony",
    date:"5/11/23",
    location:"Main Auditorium",
    description:"sjbhsbixasjsx sxbsxnsxjsxhsnxj hbxhnxjxniujiannjanj",
    available_tickets:200,
  ticket_price:100,
  total_collection:0
    }

];


function EventCard({ event, onMoreClick }) {
  return (
    <div className="card-grid-space">
        <div className="card">
          <div>
            <h1>{event.name}</h1>
            <p>{event.description}</p>
            <div className="date">{event.date}</div>
            <button  className='tag' onClick={() => onMoreClick(event)}>More</button>
          </div>
        </div>
    </div>
    
   
  );
}


function EventInformation({ selectedEvent, onClose }) {
  return (
    <div className="event-information">
      <h3>{selectedEvent.name}</h3>
      <p>{selectedEvent.description}</p>
      <div id='extrainfo'>
        <p>Date: {selectedEvent.date}</p>
        <p>Location: {selectedEvent.location}</p>
        <p>Available Tickets: {selectedEvent.available_tickets}</p>
        <p>Ticket price: {selectedEvent.ticket_price}</p>

      </div>
      <div id='but'>
        <a href="/events" className="btn btn-primary">Book tickets</a>
        <button onClick={onClose}>Close</button>
      </div>
      
    </div>
  );
}


export default function EventDetails() {

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [a,seta]=useState();
  const [ev,setEv]=useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('http://localhost:5000/events'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setEv(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchEvents();
  }, []);

  const handleMoreClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClose = () => {
    setSelectedEvent(null);
    seta(null);
  };
  
  if(selectedEvent){
    return  <EventInformation selectedEvent={selectedEvent} onClose={handleClose} />
      
      
  }
  
  return(
      <div className='eventcards'>
        <h2 className='t'>UPCOMING EVENTS</h2>
        <section class="cards-wrapper">
          {ev.map((event) => (
            <EventCard key={event.id} event={event} onMoreClick={handleMoreClick} />
          ))}
        </section>
       
       
      


      </div>
  );
};

