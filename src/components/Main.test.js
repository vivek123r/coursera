// src/components/Main.test.js
import { render } from '@testing-library/react';
import Main from './Main';

describe('Main Component', () => {
    test('initializeTimes function returns correct initial times', () => {
        // Mock the initialTimes function
        const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

        // Call the initializeTimes directly (if it’s exported) or test through the component
        const initialTimes = Main.initializeTimes(); // Adjust based on your setup

        expect(initialTimes).toEqual(expectedTimes);
    });

    test('updateTimes function returns the same available times', () => {
        const availableTimes = ['17:00', '18:00', '19:00'];

        // Mock the updateTimes function
        const updatedTimes = Main.updateTimes(availableTimes);

        expect(updatedTimes).toEqual(availableTimes);
    });
});
