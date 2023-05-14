import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faReddit } from '@fortawesome/free-brands-svg-icons';
import "./eventDetails.css"

export default function EventDetails() {

    const shareUrl = 'http://localhost:3000';
    const shareTitle = 'Join me at SpaceCon!';
    return (
        <div className="event-details">
            <h1 align="center">spaceCon</h1>
            <p align="center">Join us for the premier conference for space enthusiasts and professionals, where we explore the latest developments in space technology, research, and exploration.</p>
            <h2 align="center">Event Details:</h2>
            <ul align="center">
                <li align="center"><strong>Event Name:</strong> SpaceCon</li>
                <li align="center"><strong>Date:</strong> July 15-17, 2023</li>
                <li align="center"><strong>Location:</strong> PICT ,Pune</li>
            </ul>
            <h2 align="center">Share:</h2>
      <ul className="share-buttons">
        <li>
          <a href={`https://www.facebook.com/sharer.php?u=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href={`https://www.reddit.com/submit?url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faReddit} />
          </a>
        </li>
      </ul>
            <h2 align="center">Speakers:</h2>
            <ul>
                <li align="center">Dr. Mae Jemison, the first woman of color to go to space</li>
                <li align="center"> Elon Musk, founder of SpaceX</li>
                <li align="center">Jeff Bezos, founder of Blue Origin</li>
                <li align="center">Bill Nye, science educator and CEO of The Planetary Society</li>
                <li align="center">Dr. Ellen Stofan, Director of the Smithsonian's National Air and Space Museum</li>
            </ul>
            <h2 align="center">Agenda:</h2>
            <p align="center">The three-day event will include keynote speeches, panel discussions, and interactive sessions covering topics such as:</p>
            <ul align="center">
                <li align="center">Commercial space exploration</li>
                <li align="center">The future of space tourism</li>
                <li align="center">Advances in rocket technology</li>
                <li align="center">Sustainable space habitats</li>
                <li align="center">The search for extraterrestrial life</li>
                <li align="center">International collaboration in space exploration</li>
            </ul>
            <h2 align="center">Networking:</h2>
            <p align="center">SpaceCon provides a unique opportunity for attendees to network with industry leaders and peers. Whether you're looking for new business opportunities, career advice, or just want to connect with like-minded individuals, there will be plenty of chances to meet and mingle throughout the event.</p>
            <h2 align="center">Tickets:</h2>
            <p> align="center"Tickets for SpaceCon are on sale now and can be purchased on our website. Early bird pricing is available until June 15th, so be sure to take advantage of the discount while it lasts!</p>
            <div className="text-center mt-4">
                <h2>Ready to Book an Event?</h2>
                <p>Explore our upcoming events and secure your spot now!</p>
                <a href="/events" className="btn btn-primary">Book tickets</a>
            </div>
        </div>
    )
}