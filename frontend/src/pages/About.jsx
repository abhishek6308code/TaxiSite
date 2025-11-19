// About.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";
import fleet from '../assets/image/fleet.jpg';

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
          <Col xs={12} lg={6} className="mb-4 mb-lg-0 order-1 order-lg-0">
            <img
              // src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1200"
              src={fleet}
              alt="Our Story"
              className="img-fluid rounded shadow w-100 about-hero-img"
              loading="lazy"
            />
          </Col>

          <Col xs={12} lg={6} className="order-0 order-lg-1">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, our taxi service has been committed to providing reliable, safe, and comfortable
              transportation to our community. What started as a small operation with just a few vehicles has
              grown into a trusted service with a modern fleet and experienced drivers.
            </p>
            <p>
              We understand that transportation is more than just getting from point A to point B. It's about
              reliability, safety, comfort, and peace of mind. That's why we've built our business on these
              core values.
            </p>
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

        <Row className="bg-light rounded p-3 p-sm-4 align-items-center gx-3 join-row">
          <Col xs={12} lg={8}>
            <h3 className="mb-1">Join Our Team</h3>
            <p className="mb-0">
              Are you a professional driver looking for a great opportunity? We're always looking for
              dedicated individuals to join our team. Competitive pay, flexible hours, and supportive management.
            </p>
          </Col>
          <Col xs={12} lg={4} className="text-lg-end mt-3 mt-lg-0">
            <Link to="/contact" className="btn btn-warning btn-lg apply-btn w-100 w-lg-auto" aria-label="Apply to join our team">
              Apply Now
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
