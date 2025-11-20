// import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Navbar.css';  // <-- add CSS below

// function NavigationBar() {
//   return (
//     // Using Offcanvas for small screens provides a full-width accessible menu
//     <Navbar
//       bg="dark"
//       variant="dark"
//       expand="lg"
//       sticky="top"
//       className="py-2 navbar-custom"
//     >
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
//           <i className="bi bi-taxi-front-fill me-2" aria-hidden="true"></i>
//           <span className="visually-hidden">TaxiCab Service</span>
//           <span className="d-none d-md-inline">TaxiCab Service</span>
//         </Navbar.Brand>

//         {/* Toggle uses Offcanvas on smaller viewports */}
//         <Navbar.Toggle aria-controls="offcanvasNavbar" />

//         <Navbar.Offcanvas
//           id="offcanvasNavbar"
//           aria-labelledby="offcanvasNavbarLabel"
//           placement="end"
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav className="ms-auto text-center text-lg-start">
//               <Nav.Link as={Link} to="/" className="nav-item-custom" onClick={() => { /* close handled by Offcanvas */ }}>
//                 HOME
//               </Nav.Link>
//               <Nav.Link as={Link} to="/about" className="nav-item-custom">
//                 ABOUT US
//               </Nav.Link>
//               <Nav.Link as={Link} to="/services" className="nav-item-custom">
//                 SERVICE
//               </Nav.Link>
//               <Nav.Link as={Link} to="/contact" className="nav-item-custom">
//                 <p  className="btn btn-warning btn-lg btn-block-mobile" aria-label="Contact us">
//                   <i className="bi bi-car-front-fill me-2" aria-hidden="true"></i>
//                   <span>Book Now</span>
//                 </p>
//               </Nav.Link>
//               <Nav.Link as={Link} to="/admin/bookings" className="nav-item-custom">
//                 ADMIN BOOKINGS
//               </Nav.Link>
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;
import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function NavigationBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const location = useLocation(); // optional: to auto-close when route changes

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  // Optional: close offcanvas when route changes (handles programmatic nav)
  // Useful if some links navigate programmatically elsewhere in the app
  // useEffect(() => { setShowOffcanvas(false); }, [location]);

  // small helper to render nav links — closes menu on click
  const NavLinkItem = ({ to, children, className = 'nav-item-custom' }) => (
    <Nav.Link
      as={Link}
      to={to}
      className={className}
      onClick={() => {
        // close offcanvas for small screens
        handleClose();
      }}
    >
      {children}
    </Nav.Link>
  );

  return (
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

        {/* control Offcanvas via show prop */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={showOffcanvas}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto text-center text-lg-start">
              <NavLinkItem to="/">HOME</NavLinkItem>
              <NavLinkItem to="/about">ABOUT US</NavLinkItem>
              <NavLinkItem to="/services">SERVICE</NavLinkItem>

              {/* Book Now styled button inside nav — close offcanvas when clicked */}
              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-item-custom"
                onClick={() => handleClose()}
              >
                <p className="btn btn-warning btn-lg btn-block-mobile mb-0" aria-label="Contact us">
                  <i className="bi bi-car-front-fill me-2" aria-hidden="true"></i>
                  <span>Book Now</span>
                </p>
              </Nav.Link>

              <NavLinkItem to="/admin/bookings">ADMIN BOOKINGS</NavLinkItem>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
