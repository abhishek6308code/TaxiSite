import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';  // <-- add CSS below

function NavigationBar() {
  return (
    // Using Offcanvas for small screens provides a full-width accessible menu
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="py-2 navbar-custom"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
          <i className="bi bi-taxi-front-fill me-2" aria-hidden="true"></i>
          <span className="visually-hidden">TaxiCab Service</span>
          <span className="d-none d-md-inline">TaxiCab Service</span>
        </Navbar.Brand>

        {/* Toggle uses Offcanvas on smaller viewports */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto text-center text-lg-start">
              <Nav.Link as={Link} to="/" className="nav-item-custom" onClick={() => { /* close handled by Offcanvas */ }}>
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-item-custom">
                ABOUT US
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-item-custom">
                SERVICE
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-item-custom">
                <p  className="btn btn-warning btn-lg btn-block-mobile" aria-label="Contact us">
                  <i className="bi bi-car-front-fill me-2" aria-hidden="true"></i>
                  <span>Book Now</span>
                </p>
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/bookings" className="nav-item-custom">
                ADMIN BOOKINGS
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
