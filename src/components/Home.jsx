import React from 'react';
import './Home.css'

const HomePage = () => {
  return (
    <div style = {{ backgroundImage: 'url("https://wallpapercave.com/wp/wp2848076.jpg")', opacity: '0.8' }}>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ boxShadow: '0px 0px 7px 2px grey' }}>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://wallpapercave.com/wp/wp7488226.jpg" className="d-block w-100" style={{ height: "30rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontFamily: 'Castoro Titling' }}>"Find your best host for the event"</h5>
              <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}></p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" style={{ height: "30rem" }} alt="..." />

            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontFamily: 'Castoro Titling' }}>Unveil the celebration!</h5>
              <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1329410603/photo/large-group-of-people-at-a-concert-party.jpg?b=1&s=170667a&w=0&k=20&c=mPa6HlEFCBh8rT4kt611m56ha8HwDxMO6aKZBqAJe0c=" className="d-block w-100" style={{ height: "30rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontFamily: 'Castoro Titling' }}>Enjoy to the fullest!</h5>
              <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>  
      <div className="container mt-4">
        <h1  style={{ color: 'white' }}>Welcome to Event Nation</h1>
        <p  style={{ color: 'white' }}>Plan and organize your events with ease.</p>

        <div className="card mt-4">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://freedesignfile.com/upload/2016/10/Cheering-crowd-at-a-rock-concert-HD-picture-01.jpg" className="card-img" alt="Image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">OUR WORK</h5>
                <p className="card-text">At Event Nation, we strive to provide exceptional event management services tailored to meet your specific requirements. Our website offers a comprehensive platform for planning and organizing various types of events, including corporate conferences, weddings, parties, and more.</p>
                <p className="card-text">With our user-friendly interface, you can easily browse through different event categories, explore upcoming and past events, and get detailed information about each event. Our team of skilled professionals is dedicated to ensuring a seamless and memorable event experience for both event organizers and attendees.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 style={{ color: 'white' }}>Ready to Book an Event?</h2>
          <p style={{ color: 'white' }}>Explore our upcoming events and secure your spot now!</p>
          <a href="/event-details" className="btn btn-primary">Browse Events</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
