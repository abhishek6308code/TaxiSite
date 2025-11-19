// controllers/bookingsController.js
const { validationResult } = require('express-validator');
const Booking = require('../model/Booking');

/**
 * Create booking (public)
 */
exports.createBooking = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const payload = {
      name: req.body.name,
      pickup: req.body.pickup || '',
      drop: req.body.drop || '',
      tripType: req.body.tripType || '',
      email: req.body.email,
      phone: req.body.phone,
      date: req.body.date || '',
      time: req.body.time || '',
      car: req.body.car || '',
      passengers: req.body.passengers ? Number(req.body.passengers) : 1,
      message: req.body.message || ''
    };

    const booking = new Booking(payload);
    await booking.save();
    return res.status(201).json({ success: true, booking });
  } catch (err) {
    next(err);
  }
};

/**
 * List bookings (admin)
 */
exports.listBookings = async (req, res, next) => {
  try {
    const { page = 1, limit = 25, status, q } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (q) {
      filter.$or = [
        { name: new RegExp(q, 'i') },
        { email: new RegExp(q, 'i') },
        { phone: new RegExp(q, 'i') },
        { pickup: new RegExp(q, 'i') },
        { drop: new RegExp(q, 'i') }
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [total, bookings] = await Promise.all([
      Booking.countDocuments(filter),
      Booking.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit))
    ]);

    return res.json({
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
      bookings
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get single booking (admin)
 */
exports.getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Not found' });
    return res.json({ booking });
  } catch (err) {
    next(err);
  }
};

/**
 * Update only status (admin) - optional (already had)
 */
exports.updateStatus = async (req, res, next) => {
  try {
    const { status, adminNote } = req.body;
    if (!['new','accepted','rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const booking = await Booking.findByIdAndUpdate(req.params.id, { status, adminNote: adminNote || '' }, { new: true });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    return res.json({ success: true, booking });
  } catch (err) {
    next(err);
  }
};

/**
 * Update booking (admin) - full update of allowed fields
 */
exports.updateBooking = async (req, res, next) => {
  try {
    // Validate inputs if express-validator used in route
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    // Only allow a subset of fields to be updated for safety
    const allowed = ['name','pickup','drop','tripType','email','phone','date','time','car','passengers','message','status','adminNote'];
    const update = {};
    allowed.forEach(field => {
      if (req.body[field] !== undefined) update[field] = req.body[field];
    });

    // Ensure passengers numeric
    if (update.passengers !== undefined) update.passengers = Number(update.passengers) || 1;

    const booking = await Booking.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    return res.json({ success: true, booking });
  } catch (err) {
    next(err);
  }
};

/**
 * Delete booking (admin)
 */
exports.deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    return res.json({ success: true, message: 'Booking deleted' });
  } catch (err) {
    next(err);
  }
};
