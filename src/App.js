import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import './styles.css';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/testimonials" element={<CustomersSay />} />
          <Route path="/chicago" element={<Chicago />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
