// src/__tests__/updateTimes.test.js
import { updateTimes } from '../path/to/your/reducer'; // Adjust the path accordingly
import { fetchAPI } from '../api'; // Import the fetchAPI function

jest.mock('../api'); // Mock the API module

describe('updateTimes', () => {
    it('should return available times for the selected date', () => {
        const selectedDate = '2024-10-25'; // Example date
        const mockTimes = ['5:00 PM', '6:00 PM', '7:00 PM']; // Mock response
        fetchAPI.mockReturnValue(mockTimes); // Mock fetchAPI to return mockTimes

        const initialState = []; // Your initial state here
        const newState = updateTimes(initialState, { type: 'UPDATE_TIMES', payload: selectedDate });

        expect(newState).toEqual(mockTimes); // Check if newState equals the mockTimes
    });
});
