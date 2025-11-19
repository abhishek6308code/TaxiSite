import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 site-footer">
      <Container className="py-4">
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="text-warning mb-3">TaxiCab Service</h5>
            <p>
              Your trusted transportation partner, providing reliable and safe taxi services 24/7.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="text-warning mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-warning mb-3">Contact Info</h5>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2" aria-hidden="true"></i>
              <a href="tel:+15551234567" className="text-white text-decoration-none">+1 (555) 123-4567</a>
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2" aria-hidden="true"></i>
              <a href="mailto:info@taxicabservice.com" className="text-white text-decoration-none">info@taxicabservice.com</a>
            </p>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill me-2" aria-hidden="true"></i>
              123 Main Street, City, State 12345
            </p>
          </Col>
        </Row>
        <hr className="my-4 bg-secondary" />
        <Row>
          <Col className="text-center">
            <p className="mb-0 small">&copy; 2024 TaxiCab Service. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
