import React from 'react';
import { Carousel, Container, Row, Col, Card} from 'react-bootstrap';
//,  
import { Link } from 'react-router-dom';
import './Home.css'; // <-- add this file (contents below)

import TaxiSiteCrausal from '../assets/image/TaxiSiteCrausal1.jpg';

import car0 from '../assets/image/car0.jpg';
import recievingpassenger from '../assets/image/recievingpassenger.jpg';
import price from '../assets/image/price.jpg';

import alltimeservice from '../assets/image/AllTimeService.jpg';

import c2 from '../assets/image/c2.jpg';
import c3 from '../assets/image/c3.jpg';
import c4 from '../assets/image/c4.jpg';
import c5 from '../assets/image/c5.jpg';
import Dehradun from '../assets/image/Dehradun.jpg';
// import puchingjumping2 from '../assets/image/puchingjumping2.jpg';
import Services from './Services.jsx';
function Home() {
   const intervalMs = 1000;

  const imageStyle = {
    width: "100%",
    height: "60vh", // change to e.g. '40vh' for shorter carousel on small screens
    objectFit: "cover",
    display: "block",
  };
  return (
    <>

      <Carousel 
  interval={2000} 
  pause="hover" 
  touch 
  fade={false} 
  controls={true} 
  indicators={true}
>
  
  <Carousel.Item>
    <img className="d-block home-carousel-img" src={Dehradun} alt="Taxi Service 2" loading="lazy" />
    <Carousel.Caption className="home-caption">
      <h1>Safe & Comfortable Rides</h1>
      <p>Professional drivers ensuring your safety and comfort</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block home-carousel-img" src={TaxiSiteCrausal} alt="Taxi Service 1" loading="lazy" />
    <Carousel.Caption className="home-caption">
      <h1>Reliable Taxi Service</h1>
      <p>Your trusted transportation partner, available 24/7</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block home-carousel-img" src={c2} alt="Taxi Service 2" loading="lazy" />
    <Carousel.Caption className="home-caption">
      <h1>Safe & Comfortable Rides</h1>
      <p>Professional drivers ensuring your safety and comfort</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block home-carousel-img" src={TaxiSiteCrausal} alt="Taxi Service 3" loading="lazy" />
    <Carousel.Caption className="home-caption">
      <h1>Affordable Rates</h1>
      <p>Competitive pricing with no hidden charges</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block home-carousel-img" src={c3} alt="Taxi Service 4" loading="lazy" />
    <Carousel.Caption className="home-caption">
      <h1>Quick Response Time</h1>
      <p>We arrive promptly when you need us</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block home-carousel-img" src={TaxiSiteCrausal} alt="Taxi Service 3" loading="lazy" />
    <Carousel.Caption className="home-caption">
      <h1>Affordable Rates</h1>
      <p>Competitive pricing with no hidden charges</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block home-carousel-img" src={c4} alt="Taxi Service 5" loading="lazy" />
    <Carousel.Caption className="home-caption">
      <h1>Modern Fleet</h1>
      <p>Well-maintained vehicles for a smooth journey</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block home-carousel-img" src={c5} alt="Taxi Service 5" loading="lazy" />
    <Carousel.Caption className="home-caption">
      <h1>Modern Fleet</h1>
      <p>Well-maintained vehicles for a smooth journey</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

   

      <Container className="my-5">
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <Row className="g-4">
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="h-100 text-center shadow-sm card-hover">
              <div className="card-img-wrapper">
                <Card.Img
                  variant="top"
                  // src="https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800"
                  src={alltimeservice}
                  className="card-top-img"
                  loading="lazy"
                  alt="24/7 service"
                />
              </div>
              <Card.Body>
                <Card.Title>24/7 Service</Card.Title>
                <Card.Text>
                  Available round the clock for your convenience
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="h-100 text-center shadow-sm card-hover">
              <div className="card-img-wrapper">
                <Card.Img
                  variant="top"
                  // src="https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&w=800"
                  src={recievingpassenger}
                  className="card-top-img"
                  loading="lazy"
                  alt="Professional drivers"
                />
              </div>
              <Card.Body>
                <Card.Title>Professional Drivers</Card.Title>
                <Card.Text>
                  Experienced and courteous drivers at your service
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="h-100 text-center shadow-sm card-hover">
              <div className="card-img-wrapper">
                <Card.Img
                  variant="top"
                  // src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800"
                  src={car0}
                  className="card-top-img"
                  loading="lazy"
                  alt="Safe travel"
                />
              </div>
              <Card.Body>
                <Card.Title>Safe Travel</Card.Title>
                <Card.Text>
                  Your safety is our top priority on every ride
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="h-100 text-center shadow-sm card-hover">
              <div className="card-img-wrapper">
                <Card.Img
                  variant="top"
                  // src="https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?auto=compress&cs=tinysrgb&w=800"
                  src={price}
                  className="card-top-img"
                  loading="lazy"
                  alt="Best prices"
                />
              </div>
              <Card.Body>
                <Card.Title>Best Prices</Card.Title>
                <Card.Text>
                  Affordable rates with transparent pricing
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Book Your Ride Today</h2>
          <p className="text-center lead">
            Experience the difference with our premium taxi service. Whether you need a ride to the airport,
            a business meeting, or just around town, we are here for you.
          </p>
          <div className="text-center mt-4 d-flex flex-column flex-sm-row justify-content-center gap-3 px-3">
            <a href="tel:+1234567890" className="btn btn-warning btn-lg btn-block-mobile" aria-label="Call Taxi Service">
              <i className="bi bi-telephone-fill me-2" aria-hidden="true"></i>
              <span>Call Now</span>
            </a>
            <Link to="/contact" className="btn btn-dark btn-lg btn-block-mobile" aria-label="Contact us">
              <i className="bi bi-car-front-fill me-2" aria-hidden="true"></i>
              <span>Book Now</span>
            </Link>
          </div>
        </Container>
      </section>
      <Services/>
    </>
  );
}

export default Home;


