// src/__tests__/initializeTimes.test.js
import { initializeTimes } from '../path/to/your/reducer'; // Adjust the path accordingly
import { fetchAPI } from '../api'; // Import the fetchAPI function

jest.mock('../api'); // Mock the API module

describe('initializeTimes', () => {
    it('should return available times for today\'s date', () => {
        const mockTimes = ['12:00 PM', '1:00 PM', '2:00 PM']; // Mock response
        fetchAPI.mockReturnValue(mockTimes); // Mock fetchAPI to return mockTimes

        const initialState = []; // Your initial state here
        const newState = initializeTimes(initialState);

        expect(newState).toEqual(mockTimes); // Check if newState equals the mockTimes
    });
});
