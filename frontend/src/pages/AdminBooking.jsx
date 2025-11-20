// src/pages/AdminBookings.jsx
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Dropdown, ButtonGroup, Spinner } from 'react-bootstrap';
import axios from 'axios';
import * as XLSX from 'xlsx';
import.meta.env.VITE_API_BASE
import.meta.env.VITE_ADMIN_KEY

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY || localStorage.getItem('admin_key') || '';

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Edit modal state
  const [showEdit, setShowEdit] = useState(false);
  const [editing, setEditing] = useState(null); // booking being edited
  const [saving, setSaving] = useState(false);

  // delete state
  const [deletingId, setDeletingId] = useState(null);

  // fetch bookings (admin)
  const fetchBookings = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/api/bookings`, {
        headers: { 'x-admin-key': ADMIN_KEY }
      });
      setBookings(res.data.bookings || res.data.bookings || res.data);
    } catch (err) {
      console.error('Failed fetching bookings', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBookings(); }, []);

  // open edit modal
  const openEdit = (booking) => {
    setEditing({ ...booking }); // clone to edit safely
    setShowEdit(true);
  };

  // handle edit input change
  const editChange = (e) => {
    const { name, value } = e.target;
    setEditing(prev => ({ ...prev, [name]: value }));
  };

  // save edited booking (PATCH to /api/bookings/:id)
  const saveEdit = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      // PATCH whole booking (backend should accept fields); if you only support status endpoint, call that instead
      await axios.patch(`${API_BASE}/api/bookings/${editing._id}`, editing, {
        headers: { 'x-admin-key': ADMIN_KEY }
      });
      setShowEdit(false);
      setEditing(null);
      await fetchBookings();
    } catch (err) {
      console.error('Save edit error', err);
      alert('Failed to save. See console for details.');
    } finally {
      setSaving(false);
    }
  };

  // delete booking
  const handleDelete = async (id) => {
    const ok = window.confirm('Delete this booking? This action cannot be undone.');
    if (!ok) return;
    setDeletingId(id);
    try {
      await axios.delete(`${API_BASE}/api/bookings/${id}`, {
        headers: { 'x-admin-key': ADMIN_KEY }
      });
      setBookings(prev => prev.filter(b => b._id !== id));
    } catch (err) {
      console.error('Delete error', err);
      alert('Delete failed. Check server logs or console.');
    } finally {
      setDeletingId(null);
    }
  };

  // change status shortcut using your PATCH /:id/status endpoint
  const changeStatus = async (id, newStatus) => {
    try {
      await axios.patch(`${API_BASE}/api/bookings/${id}/status`, { status: newStatus }, {
        headers: { 'x-admin-key': ADMIN_KEY }
      });
      setBookings(prev => prev.map(b => b._id === id ? { ...b, status: newStatus } : b));
    } catch (err) {
      console.error('Status update failed', err);
      alert('Failed to update status.');
    }
  };

  // Download all leads to Excel (.xlsx)
  const downloadExcel = () => {
    if (!bookings || bookings.length === 0) {
      alert('No leads to download.');
      return;
    }

    // Map bookings to plain objects for excel
    const rows = bookings.map(b => ({
      id: b._id,
      name: b.name,
      email: b.email,
      phone: b.phone,
      pickup: b.pickup,
      drop: b.drop,
      tripType: b.tripType,
      car: b.car,
      passengers: b.passengers,
      date: b.date,
      time: b.time,
      status: b.status,
      message: b.message,
      adminNote: b.adminNote || '',
      createdAt: b.createdAt,
      updatedAt: b.updatedAt,
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Leads');
    XLSX.writeFile(wb, `leads_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  // Render card for booking
  const BookingCard = ({ b }) => (
    <Card className="h-100 shadow-sm booking-card">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <Card.Title className="mb-0" style={{ fontSize: '1rem' }}>{b.name}</Card.Title>
            <small className="text-muted">{b.email} • {b.phone}</small><br />
            <small className="text-muted"><b>Message:</b> {b.message || '—'}</small>
          </div>
          <div className="text-end">
            <BadgeStatus status={b.status} />
          </div>
        </div>

        <Card.Text className="small mb-2" style={{ flex: 1 }}>
          <strong>Pickup:</strong> {b.pickup || '—'}<br />
          <strong>Drop:</strong> {b.drop || '—'}<br />
          <strong>Car:</strong> {b.car || '—'} • <strong>Passengers:</strong> {b.passengers || 1}
        </Card.Text>

        <div className="d-flex gap-2 justify-content-between align-items-center mt-2">
          <div className="d-flex gap-2">
            <Button size="sm" variant="outline-primary" onClick={() => openEdit(b)}>Edit</Button>
            <Button size="sm" variant="outline-danger" onClick={() => handleDelete(b._id)} disabled={deletingId === b._id}>
              {deletingId === b._id ? (<Spinner animation="border" size="sm" />) : 'Delete'}
            </Button>
          </div>

          <div className="d-flex align-items-center">
            <small className="me-2 text-muted">Status</small>
            <Dropdown as={ButtonGroup} drop="up" className="booking-status-dropdown" popperConfig={{
              strategy: 'fixed',
              modifiers: [
                { name: 'preventOverflow', options: { boundary: 'viewport' } },
                { name: 'flip', options: { fallbackPlacements: ['top'] } } // forces only upward if possible
              ]
            }}>
              <Dropdown.Toggle size="sm" variant="secondary" id={`status-${b._id}`}>
                {b.status}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeStatus(b._id, 'new')}>New</Dropdown.Item>
                <Dropdown.Item onClick={() => changeStatus(b._id, 'accepted')}>Accepeted</Dropdown.Item>
                <Dropdown.Item onClick={() => changeStatus(b._id, 'rejected')}>Rejected</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted small">
        Created: {new Date(b.createdAt).toLocaleString()}
      </Card.Footer>
    </Card>
  );

  const BadgeStatus = ({ status }) => {
    const map = {
      new: 'secondary',
      accepted: 'success',
      rejected: 'danger'
    };
    const variant = map[status] || 'secondary';
    return <span className={`badge bg-${variant} text-capitalize`}>{status}</span>;
  };

  // UI
  return (
    <Container fluid className="my-4 vw-100">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-3">
        <h3 className="mb-0">Admin — Leads</h3>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" size="sm" onClick={fetchBookings} disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh'}
          </Button>
          <Button variant="success" size="sm" onClick={downloadExcel}>Download Excel</Button>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div className="text-center py-5"><Spinner animation="border" /></div>
      ) : (
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-3">
          {bookings.length === 0 && <div className="text-muted">No leads found.</div>}
          {bookings.map(b => (
            <Col key={b._id}>
              <BookingCard b={b} />
            </Col>
          ))}
        </Row>
      )}

      {/* Edit Modal */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editing && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label className="small">Full Name</Form.Label>
                <Form.Control name="name" size="sm" value={editing.name} onChange={editChange} />
              </Form.Group>

              <Row className="g-2">
                <Col sm={6}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small">Email</Form.Label>
                    <Form.Control name="email" size="sm" value={editing.email} onChange={editChange} />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small">Phone</Form.Label>
                    <Form.Control name="phone" size="sm" value={editing.phone} onChange={editChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="g-2">
                <Col sm={6}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small">Pickup</Form.Label>
                    <Form.Control name="pickup" size="sm" value={editing.pickup} onChange={editChange} />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small">Drop</Form.Label>
                    <Form.Control name="drop" size="sm" value={editing.drop} onChange={editChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="g-2">
                <Col sm={6}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small">Date</Form.Label>
                    <Form.Control name="date" size="sm" type="date" value={editing.date} onChange={editChange} />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small">Time</Form.Label>
                    <Form.Control name="time" size="sm" type="time" value={editing.time} onChange={editChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="g-2">
                <Col sm={6}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small">Car</Form.Label>
                    <Form.Select name="car" size="sm" value={editing.car} onChange={editChange}>
                      <option value="">Choose</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="minivan">Minivan</option>
                      <option value="luxury">Luxury</option>
                      <option value="economy">Economy</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small">Passengers</Form.Label>
                    <Form.Control name="passengers" size="sm" type="number" min={1} value={editing.passengers} onChange={editChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-2">
                <Form.Label className="small">Status</Form.Label>
                <Form.Select name="status" size="sm" value={editing.status} onChange={editChange}>
                  <option value="new">new</option>
                  <option value="accepted">accepted</option>
                  <option value="rejected">rejected</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label className="small">Admin Note</Form.Label>
                <Form.Control name="adminNote" size="sm" value={editing.adminNote} onChange={editChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label className="small">Message</Form.Label>
                <Form.Control as="textarea" rows={2} name="message" size="sm" value={editing.message} onChange={editChange} />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={() => setShowEdit(false)}>Close</Button>
          <Button variant="primary" size="sm" onClick={saveEdit} disabled={saving}>
            {saving ? 'Saving...' : 'Save changes'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
