// src/components/BookingPage.js
import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, updateTimes }) {
    return (
        <div>
            <h1>Book a Table</h1>
            <p>Please fill out the form below to reserve your table.</p>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
        </div>
    );
}

export default BookingPage;
