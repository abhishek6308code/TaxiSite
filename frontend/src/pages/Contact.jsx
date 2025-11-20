
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const API_ENDPOINT = 'http://localhost:4000/api/bookings'; // <-- change this to your backend endpoint

  const [form, setForm] = useState({
    name: '',
    pickup: '',
    drop: '',
    tripType: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    car: '',
    passengers: 1,
    message: '',
  });

  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === 'number'
          ? value === ''
            ? ''
            : Number(value)
          : value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side required-check (only name, email, phone required)
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setStatus('error');
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await axios.post(API_ENDPOINT, form, {
        headers: { 'Content-Type': 'application/json' },
      });

      setStatus('success');
      setForm({
        name: '',
        pickup: '',
        drop: '',
        tripType: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        car: '',
        passengers: 1,
        message: '',
      });
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <>
      <section className="bg-dark text-white py-4 vw-100">
        <Container>
          <h1 className="text-center mb-2">Contact Us</h1>
          <p className="text-center lead mb-0">
            We're here to help. Reach out to us anytime!
          </p>
        </Container>
      </section>

      <Container className="my-4">
        <Row className="g-3">
          <Col lg={6}>
            <h2 className="mb-3">Get In Touch</h2>
            <p className="mb-3">
              Have a question or need to book a ride? Fill out the form and we'll respond as soon as possible.
            </p>

            <Card className="mb-2 border-0 shadow-sm">
              <Card.Body className="py-2">
                <h6 className="mb-1">
                  <i className="bi bi-telephone-fill text-warning me-2"></i>
                  Phone
                </h6>
                <p className="mb-0 ms-4">
                  <a href="tel:+916307239240" className="text-decoration-none text-dark" aria-label="Call TaxiCab Service">+91 6307239240</a>
                </p>
              </Card.Body>
            </Card>

            <Card className="mb-2 border-0 shadow-sm">
              <Card.Body className="py-2">
                <h6 className="mb-1">
                  <i className="bi bi-envelope-fill text-warning me-2"></i>
                  Email
                </h6>
                <p className="mb-0 ms-4">
                  <a href="abhisheksingh19217.com.com" className="text-decoration-none text-dark" aria-label="Email TaxiCab Service">info@taxicabservice.com</a>
                </p>
              </Card.Body>
            </Card>

            <Card className="mb-2 border-0 shadow-sm">
              <Card.Body className="py-2">
                <h6 className="mb-1">
                  <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                  Address
                </h6>
                <p className="mb-0 ms-4 small">
                  Rajpur Road NEIPVD<br />
                  DEHRADUN, UTTARAKHAND<br />
                  India
                </p>
              </Card.Body>
            </Card>

            <Card className="mb-2 border-0 shadow-sm">
              <Card.Body className="py-2">
                <h6 className="mb-1">
                  <i className="bi bi-clock-fill text-warning me-2"></i>
                  Business Hours
                </h6>
                <p className="mb-0 ms-4">24/7 - We're always available!</p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="shadow">
              <Card.Body className="p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">Send Us a Message</h5>
                  <small className="text-muted">{/* optional small note */}</small>
                </div>

                {status === 'success' && (
                  <Alert variant="success" className="py-1">Thanks — we received your message and will reply shortly.</Alert>
                )}
                {status === 'error' && (
                  <Alert variant="danger" className="py-1">Please complete required fields: Name, Email, Phone.</Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  {/* Row: Name + Phone */}
                  <Row className="gy-2">
                    <Col md={6}>
                      <Form.Group controlId="contactName" className="mb-2">
                        <Form.Label className="small mb-1">Full Name *</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          size="sm"
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="form-control-sm"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="contactPhone" className="mb-2">
                        <Form.Label className="small mb-1">Phone *</Form.Label>
                        <Form.Control
                          name="phone"
                          type="tel"
                          size="sm"
                          placeholder="Phone number"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          className="form-control-sm"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Row: Email + Passengers */}
                  <Row className="gy-2">
                    <Col md={6}>
                      <Form.Group controlId="contactEmail" className="mb-2">
                        <Form.Label className="small mb-1">Email *</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          size="sm"
                          placeholder="Email address"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="form-control-sm"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="passengers" className="mb-2">
                        <Form.Label className="small mb-1">Passengers</Form.Label>
                        <Form.Control
                          name="passengers"
                          type="number"
                          size="sm"
                          min={1}
                          value={form.passengers}
                          onChange={handleChange}
                          className="form-control-sm"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Row: Pickup + Drop */}
                  <Row className="gy-2">
                    <Col md={6}>
                      <Form.Group controlId="pickupLocation" className="mb-2">
                        <Form.Label className="small mb-1">Pickup</Form.Label>
                        <Form.Control
                          name="pickup"
                          type="text"
                          size="sm"
                          placeholder="Pickup address"
                          value={form.pickup}
                          onChange={handleChange}
                          className="form-control-sm"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="dropLocation" className="mb-2">
                        <Form.Label className="small mb-1">Drop</Form.Label>
                        <Form.Control
                          name="drop"
                          type="text"
                          size="sm"
                          placeholder="Drop address"
                          value={form.drop}
                          onChange={handleChange}
                          className="form-control-sm"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Row: Trip Type + Car */}
                  <Row className="gy-2">
                    <Col md={6}>
                      <Form.Group controlId="tripType" className="mb-2">
                        <Form.Label className="small mb-1">Trip Type</Form.Label>
                        <Form.Select
                          name="tripType"
                          size="sm"
                          value={form.tripType}
                          onChange={handleChange}
                          className="form-select-sm"
                        >
                          {/* <option value="">Trip type</option> */}
                          <option value="Oneway">One Way</option>
                          <option value="Roundtrip">Round Trip</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="selectCar" className="mb-2">
                        <Form.Label className="small mb-1">Car</Form.Label>
                        <Form.Select
                          name="car"
                          size="sm"
                          value={form.car}
                          onChange={handleChange}
                          className="form-select-sm"
                        >
                          <option value="">Choose a car</option>
                          <option value="sedan">Sedan - 4 seats</option>
                          <option value="suv">SUV - 6 seats</option>
                          <option value="minivan">Minivan - 8 seats</option>
                          <option value="luxury">Luxury</option>
                          <option value="economy">Economy</option>
                          <option value="tourist">Tourist Bus</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Row: Date + Time */}
                  <Row className="gy-2">
                    <Col md={6}>
                      <Form.Group controlId="bookingDate" className="mb-2">
                        <Form.Label className="small mb-1">Date</Form.Label>
                        <Form.Control
                          name="date"
                          type="date"
                          size="sm"
                          value={form.date}
                          onChange={handleChange}
                          className="form-control-sm"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="bookingTime" className="mb-2">
                        <Form.Label className="small mb-1">Time</Form.Label>
                        <Form.Control
                          name="time"
                          type="time"
                          size="sm"
                          value={form.time}
                          onChange={handleChange}
                          className="form-control-sm"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Message */}
                  <Form.Group controlId="contactMessage" className="mb-2">
                    <Form.Label className="small mb-1">Message</Form.Label>
                    <Form.Control
                      name="message"
                      as="textarea"
                      rows={2}
                      size="sm"
                      placeholder="Additional details"
                      value={form.message}
                      onChange={handleChange}
                      className="form-control-sm"
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="warning" type="submit" size="sm" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send me-2" aria-hidden="true"></i>
                          Submit
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Card className="bg-warning">
              <Card.Body className="text-center py-3">
                <h5 className="mb-1">Need a Ride Right Now?</h5>
                <p className="mb-2 small">Call us directly for immediate service</p>
                <a href="tel:+916307239240" className="btn btn-dark btn-sm" aria-label="Call TaxiCab Service">
                  <i className="bi bi-telephone-fill me-2" aria-hidden="true"></i>
                  Call Now: +91 6307239240
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
