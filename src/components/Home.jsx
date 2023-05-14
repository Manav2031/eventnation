import React from 'react';
import './Home.css'

const HomePage = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Event Nation</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/events" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ boxShadow: '0px 0px 7px 2px grey' }}>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://theartcore.com/wp-content/uploads/2020/06/Handmade-Bags.jpg" className="d-block w-100" style={{ height: "30rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontFamily: 'Castoro Titling' }}>Gift: "Unwrap the Joy"</h5>
              <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}>Find the perfect handmade gift for any occasion, from jewelry to home decor.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://img.freepik.com/premium-photo/materials-equipment-thai-otop-product-from-dry-catathea-grass-weave-as-basketry_34031-111.jpg?w=996" className="d-block w-100" style={{ height: "30rem" }} alt="..." />

            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontFamily: 'Castoro Titling' }}>Kitchen: "Whip Up Something Special"</h5>
              <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}>Cook up something special with our handcrafted kitchenware.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/moroccan-stuff_181624-36914.jpg?w=996&t=st=1682671774~exp=1682672374~hmac=0f22882202197374a0616f651c2caffc19330cb0110d8902ddd24e1d0cb5b803" className="d-block w-100" style={{ height: "30rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontFamily: 'Castoro Titling' }}>Decore the place</h5>
              <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}>Transform your space with one-of-a-kind handmade decorations.</p>
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
        <h1>Welcome to Event Nation</h1>
        <p>Plan and organize your events with ease.</p>

        <div className="card mt-4">
          <div className="row no-gutters">
            <div className="col-md-4">
              {/* <img src={img1} className="card-img" alt="Image" /> */}
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
          <h2>Ready to Book an Event?</h2>
          <p>Explore our upcoming events and secure your spot now!</p>
          <a href="/event-details" className="btn btn-primary">Browse Events</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
