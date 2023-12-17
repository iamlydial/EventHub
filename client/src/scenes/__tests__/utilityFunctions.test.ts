// import '@testing-library/jest-dom';
// // setupTests.ts
// import '@testing-library/jest-dom/extend-expect';
// import React from 'react';
// import { render, waitFor } from '@testing-library/react';
// import axios from 'axios'; // Import axios for mocking
// import YourEventHistory from '../YourEventHistory/YourEventHistory';

// // Mock axios to prevent API calls
// jest.mock('axios');

// const mockEventData = [
//   {
//     ID: 1,
//     user_id: 123,
//     event_name: 'Test Event',
//     event_theme: 'Testing Theme',
//     event_date: 'Testing date',
//     event_time: 'Testing time',
//     location: 'Testing location',
//     catering_type: 'Testing catering',
//     decoration_style: 'Testing decoration',
//     event_status: 'Testing status',
//     event_confirmed: 'Confirmed',
//     location_new: 'New location',
//   },
// ];

// test('renders current event after API call', async () => {
//   // Mock axios get method to return test data
//   (axios.get as jest.Mock).mockResolvedValueOnce({ data: { eventDetails: mockEventData } });

//   const { getByText } = render(<YourEventHistory>);

//   // Wait for the component to render and the API call to resolve
//   await waitFor(async () => {
//     // Expectations after the API call resolves and the component renders
//     expect(await getByText('Your Current Event')).toBeInTheDocument();
//     expect(await getByText('Event Name: Test Event')).toBeInTheDocument();
//   });
// });
