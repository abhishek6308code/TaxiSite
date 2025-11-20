// About.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";
import fleet from '../assets/image/fleet.jpg';
import Luxary from '../assets/image/Luxary.jpg';
import taxisite from '../assets/image/TaxiSiteCrausal1.jpg';

import recievingpassenger from '../assets/image/recievingpassenger.jpg';
import rentalService from '../assets/image/rentalvechicle.jpg';

function About() {
  return (
    <>
      {/* Full-bleed hero section */}
      <section className="about-hero safe-top vw-100">
        {/* fluid container with no horizontal padding so background is full-bleed,
            inner .about-hero-inner constrains text width */}
        <Container fluid className="px-0">
          <div className="about-hero-inner text-center py-5">
            <h1 className="mb-2">About Our Taxi Service</h1>
            <p className="lead mb-0">
              Providing exceptional transportation services since 2010
            </p>
          </div>
        </Container>
      </section>

      {/* Normal content area (centered container) */}
      <Container className="my-5 about-container">
        <Row className="align-items-center mb-5">
          {/* image first on mobile then text on larger screens */}
          <Col xs={15} lg={6} className="mb-4 mb-lg-0 order-1 order-lg-0">
            <img
              // src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1200"
              src={recievingpassenger}
              alt="Our Story"
              className="img-fluid rounded shadow w-100 about-hero-img"
              loading="lazy"
            />
          </Col>

          <Col xs={9} lg={6} className="order-0 order-lg-1">
            <h2>Our Story</h2>
            <p className="fs-5">
              At Radha Travel, we believe every journey should be safe, comfortable, and hassle-free. With years of experience in the transportation industry, we take pride in offering reliable taxi services that meet the needs of locals, tourists, families, and business travelers alike.
            </p>
            <p>
              Our mission is simple to provide punctual, affordable, and comfortable rides that you can depend on anytime, anywhere.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col xs={12} lg={6} className="order-1 order-lg-0">
            <h2>Who WE Are</h2>
            <p className="fs-5">
             We are a dedicated taxi service company committed to offering high-quality transportation with a focus on safety, professionalism, and customer satisfaction. Our team of trained and courteous drivers ensures that every ride with us is smooth and secure.
            </p>
            <p>
              With a growing fleet of well-maintained vehicles, we are equipped to handle all types of travel needs from daily city rides to long-distance journeys.
            </p>
          </Col>
          {/* image first on mobile then text on larger screens */}
          <Col xs={12} lg={6} className="mb-4 mb-lg-0 order-0 order-lg-1">
            <img
              // src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1200"
              src={Luxary}
              alt="Our Story"
              className="img-fluid rounded shadow w-100 about-hero-img"
              loading="lazy"
            />
          </Col>


        </Row>


        <h2 className="text-center mb-4">Our Values</h2>
        <Row className="g-4 mb-5 values-row">
          <Col xs={12} md={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <div className="icon-circle text-warning mb-3" aria-hidden="true">
                  <i className="bi bi-shield-check"></i>
                </div>
                <Card.Title>Safety First</Card.Title>
                <Card.Text>
                  All our drivers are thoroughly vetted and trained. Our vehicles undergo regular maintenance
                  and safety inspections to ensure your well-being.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <div className="icon-circle text-warning mb-3" aria-hidden="true">
                  <i className="bi bi-clock-history"></i>
                </div>
                <Card.Title>Reliability</Card.Title>
                <Card.Text>
                  We're here when you need us, 24 hours a day, 7 days a week. Count on us for punctual
                  pickups and dependable service every time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <div className="icon-circle text-warning mb-3" aria-hidden="true">
                  <i className="bi bi-people"></i>
                </div>
                <Card.Title>Customer Focus</Card.Title>
                <Card.Text>
                  Your satisfaction is our priority. We continuously strive to improve our service based on
                  customer feedback and changing needs.
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
    </>
  );
}

export default About;
