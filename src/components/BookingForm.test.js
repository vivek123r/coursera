// src/components/BookingForm.test.js
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/Book a Table/i); // Adjust to match your actual heading text
    expect(headingElement).toBeInTheDocument();
});
