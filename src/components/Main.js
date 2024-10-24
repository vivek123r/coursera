// src/components/Main.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import BookingForm from './BookingForm';
import { submitAPI } from '../api'; // Make sure to import the submitAPI function

const Main = () => {
    const navigate = useNavigate(); // Use the useNavigate hook for navigation

    const submitForm = async (formData) => {
        try {
            const response = await submitAPI(formData); // Call the submitAPI with form data
            if (response) {
                navigate('/confirmation'); // Navigate to confirmation page if submission is successful
            } else {
                console.error('Booking submission failed.');
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    };

    return (
        <div>
            <h1>Booking Page</h1>
            <BookingForm submitForm={submitForm} /> {/* Pass the submitForm function to BookingForm */}
        </div>
    );
};

export default Main;
