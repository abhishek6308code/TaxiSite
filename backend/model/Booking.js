// // models/Booking.js
// const mongoose = require('mongoose');

// const BookingSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   pickup: { type: String, trim: true, default: '' },
//   drop: { type: String, trim: true, default: '' },
//   tripType: {
//     type: String,
//     enum: ['oneway', 'roundtrip', ''],
//     default: '',
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   date: { type: String, default: '' }, // keep string to match input; optionally use Date
//   time: { type: String, default: '' },
//   car: {
//     type: String,
//     enum: ['sedan', 'suv', 'minivan', 'luxury', 'economy', ''],
//     default: '',
//   },
//   passengers: { type: Number, min: 1, default: 1 },
//   message: { type: String, trim: true, default: '' },

//   // admin-controlled status
//   status: {
//     type: String,
//     enum: ['new', 'accepted', 'rejected'],
//     default: 'new',
//     index: true,
//   },

//   // optional fields for admin notes or booking metadata
//   adminNote: { type: String, trim: true, default: '' },
//   // add any other metadata you want: price, driverId, pickupCoordinates etc.

// }, {
//   timestamps: true, // createdAt, updatedAt
// });

// module.exports = mongoose.model('Booking', BookingSchema);
// models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  pickup: { type: String, trim: true, default: '' },
  drop: { type: String, trim: true, default: '' },
  tripType: { type: String, enum: ['oneway', 'roundtrip', ''], default: '' },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  date: { type: String, default: '' }, // keep as string to match form input; change to Date if needed
  time: { type: String, default: '' },
  car: { type: String, enum: ['sedan','suv','minivan','luxury','economy',''], default: '' },
  passengers: { type: Number, min: 1, default: 1 },
  message: { type: String, trim: true, default: '' },

  // admin-controlled status
  status: { type: String, enum: ['new','accepted','rejected'], default: 'new', index: true },

  adminNote: { type: String, trim: true, default: '' }

}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
