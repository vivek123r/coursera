// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ submitForm }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm(formData);
    };

    return (
        <section className="booking-form" aria-labelledby="booking-form-heading">
            <h2 id="booking-form-heading">Book Now</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    aria-label="Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="date">Select Date:</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    aria-label="Select Date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <label htmlFor="time">Select Time:</label>
                <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    aria-label="Select Time"
                    value={formData.time}
                    onChange={handleChange}
                />

                <button type="submit" aria-label="Submit booking form">Book Now</button>
            </form>
        </section>
    );
};

export default BookingForm;
