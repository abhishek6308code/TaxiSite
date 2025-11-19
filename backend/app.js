// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookingsRouter = require('./routes/booking');

const app = express();

// CORS - allow your frontend origin
const FRONTEND = (process.env.FRONTEND_ORIGIN || '*')
    .split(',')
  .map(s => s.trim())
  .filter(Boolean);
const corsOptions = {
  origin: function(origin, callback) {
    // allow requests with no origin (curl, mobile apps, server-to-server)
    if (!origin) return callback(null, true);
    if (FRONTENDS.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS policy: This origin is not allowed: ' + origin));
    }
  },
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization','x-admin-key','X-Requested-With'],
  credentials: true, // if you use cookies/auth
};
app.use(cors({ origin: FRONTEND, optionsSuccessStatus: 200 }));

app.use(express.json());

// health check
app.get('/health', (req, res) => res.json({ ok: true }));

// connect to Mongo and start server
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/taxicab';

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');

    // routes
    app.use('/api/bookings', bookingsRouter);

    // error handler
    app.use((err, req, res, next) => {
      console.error('Unhandled error:', err);
      if (err.name === 'ValidationError') {
        const details = Object.keys(err.errors).reduce((acc, key) => {
          acc[key] = err.errors[key].message;
          return acc;
        }, {});
        return res.status(400).json({ error: 'Validation error', details });
      }
      res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('Mongo connection error:', err);
    process.exit(1);
  });
