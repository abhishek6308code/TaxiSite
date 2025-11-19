import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AdminBookings from './pages/AdminBooking';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <NavigationBar />
      <main id="main-content" className="flex-grow-1" tabIndex={-1} role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
