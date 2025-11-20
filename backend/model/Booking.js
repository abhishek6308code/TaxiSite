
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  pickup: { type: String, trim: true, default: '' },
  drop: { type: String, trim: true, default: '' },
  tripType: { type: String, enum: ['Oneway', 'Roundtrip', ''], default: '' },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  date: { type: String, default: '' }, // keep as string to match form input; change to Date if needed
  time: { type: String, default: '' },
  car: { type: String, enum: ['Sedan','Suv','Minivan','Luxury','Economy','Tourist Bus',''], default: '' },
  passengers: { type: Number, min: 1, default: 1 },
  message: { type: String, trim: true, default: '' },

  // admin-controlled status
  status: { type: String, enum: ['New','Accepted','Rejected','Completed'], default: 'New', index: true },

  adminNote: { type: String, trim: true, default: '' }

}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
