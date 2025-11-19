// routes/bookings.js
const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const bookingsController = require('../controllers/bookingController');

// simple admin middleware for demo (replace with real auth in prod)
const isAdmin = (req, res, next) => {
  if (process.env.ADMIN_KEY && req.headers['x-admin-key'] === process.env.ADMIN_KEY) {
    return next();
  }
  return res.status(403).json({ error: 'Forbidden - admin only' });
};

/**
 * POST /api/bookings
 * Public create
 */
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('phone').trim().notEmpty().withMessage('Phone is required'),
    body('passengers').optional().isInt({ min: 1 }).withMessage('Passengers must be >= 1'),
    body('tripType').optional().isIn(['oneway','roundtrip','']).withMessage('Invalid tripType'),
    body('car').optional().isIn(['sedan','suv','minivan','luxury','economy','']).withMessage('Invalid car')
  ],
  bookingsController.createBooking
);

/**
 * GET /api/bookings
 * Admin list
 */
router.get('/', isAdmin, bookingsController.listBookings);

/**
 * GET /api/bookings/:id
 * Admin get single
 */
router.get('/:id', isAdmin, bookingsController.getBooking);

/**
 * PATCH /api/bookings/:id/status
 * Admin update status only
 */
router.patch('/:id/status', isAdmin,
  [
    body('status').notEmpty().withMessage('Status required').isIn(['new','accepted','rejected']).withMessage('Invalid status')
  ],
  bookingsController.updateStatus
);

/**
 * PATCH /api/bookings/:id
 * Admin: update booking fields
 */
router.patch('/:id',
  isAdmin,
  [
    param('id').notEmpty().withMessage('ID required'),
    body('email').optional().isEmail().withMessage('Invalid email'),
    body('passengers').optional().isInt({ min: 1 }).withMessage('Passengers must be >= 1'),
    body('tripType').optional().isIn(['oneway','roundtrip','']).withMessage('Invalid tripType'),
    body('car').optional().isIn(['sedan','suv','minivan','luxury','economy','']).withMessage('Invalid car'),
    body('status').optional().isIn(['new','accepted','rejected']).withMessage('Invalid status')
  ],
  bookingsController.updateBooking
);

/**
 * DELETE /api/bookings/:id
 * Admin: delete booking
 */
router.delete('/:id', isAdmin, bookingsController.deleteBooking);

module.exports = router;
