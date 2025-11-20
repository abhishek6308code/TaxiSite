import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import citytour from '../assets/image/citytour.jpg';
import Airport from '../assets/image/Airport0.jpg';
import CorporateService from '../assets/image/CorporateService.jpg';
import SpecialEvent from '../assets/image/SpecialEvent.jpg';

import ServiceFareTable from './ServiceTable';
function Services() {
  return (
    <>
      <section className="bg-warning py-5 vw-100">
        <Container>
          <h1 className="text-center mb-3">Our Services</h1>
          <p className="text-center lead">
            Comprehensive taxi solutions for all your transportation needs
          </p>
        </Container>
      </section>

      <Container className="my-5">
        <Row className="g-4">
          <Col lg={6}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                // src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                src={Airport}
                style={{ height: '250px', objectFit: 'cover' }}
                loading="lazy"
                alt="Airport transfer vehicle"
              />
              <Card.Body>
                <Card.Title className="h3">
                  <i className="bi bi-airplane text-warning me-2">Airport Transfer</i>
                  
                </Card.Title>
                <Card.Text>
                  Reliable airport pickup and drop-off services. We monitor flight schedules to ensure
                  timely arrivals and departures. Travel stress-free with our professional airport transfer service.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Flight tracking</ListGroup.Item>
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Meet and greet service</ListGroup.Item>
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Luggage assistance</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                // src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200"
                src={citytour}
                style={{ height: '250px', objectFit: 'cover' }}
                loading="lazy"
                alt="City tour taxi"
              />
              <Card.Body>
                <Card.Title className="h3">
                  <i className="bi bi-geo-alt text-warning me-2">City Tours</i>
                  
                </Card.Title>
                <Card.Text>
                  Explore the city with our knowledgeable drivers who can show you the best spots.
                  Perfect for tourists and visitors who want to make the most of their stay.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Customizable routes</ListGroup.Item>
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Local expertise</ListGroup.Item>
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Flexible duration</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                // src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200"
                src={CorporateService}
                style={{ height: '250px', objectFit: 'cover' }}
                loading="lazy"
                alt="Corporate transport"
              />
              <Card.Body>
                <Card.Title className="h3">
                  <i className="bi bi-briefcase text-warning me-2"> Corporate Services</i>
                 
                </Card.Title>
                <Card.Text>
                  Professional transportation for your business needs. From executive travel to employee
                  shuttles, we provide reliable service for your organization.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Corporate accounts</ListGroup.Item>
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Monthly billing</ListGroup.Item>
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Priority booking</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                // src="https://images.pexels.com/photos/6368962/pexels-photo-6368962.jpeg?auto=compress&cs=tinysrgb&w=1200"
                src={SpecialEvent}
                style={{ height: '250px', objectFit: 'cover' }}
                loading="lazy"
                alt="Event transportation"
              />
              <Card.Body>
                <Card.Title className="h3">
                  <i className="bi bi-calendar-event text-warning me-2"> Special Events</i>
                 
                </Card.Title>
                <Card.Text>
                  Make your special occasions memorable with our event transportation services.
                  Weddings, parties, concerts, or any celebration - we've got you covered.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Wedding transportation</ListGroup.Item>
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Group bookings</ListGroup.Item>
                  <ListGroup.Item><i className="bi bi-check-circle text-success me-2"></i>Event coordination</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 bg-dark text-white rounded p-5">
          <Col md={8} className="mx-auto text-center">
            <h2 className="mb-3">Need a Custom Service?</h2>
            <p className="lead mb-4">
              We can tailor our services to meet your specific transportation needs.
              Contact us to discuss your requirements.
            </p>
            <Link to="/contact" className="btn btn-warning btn-lg" aria-label="Get in touch with TaxiCab Service">
              <i className="bi bi-chat-dots me-2" aria-hidden="true"></i>
              Get in Touch
            </Link>
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
        <ServiceFareTable />
      </section>
    </>
  );
}

export default Services;
