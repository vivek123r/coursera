// src/api.js

// Mocking the fetchAPI function to return available times
export const fetchAPI = async (date) => {
    // Simulate fetching available times based on the selected date
    // For demonstration purposes, we'll return fixed times
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

// Function to submit the form data
export const submitAPI = async (formData) => {
    // Mocking the submission logic
    try {
        // Here you would typically send a POST request to your server
        console.log("Form Data Submitted:", formData);
        return true; // Simulate a successful submission
    } catch (error) {
        console.error("Error submitting form:", error);
        return false; // Return false if there was an error
    }
};
