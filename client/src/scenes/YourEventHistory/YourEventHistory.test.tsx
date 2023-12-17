// import React from 'react';
// import { render, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import axios from 'axios'; // Import axios for mocking
// import YourEventHistory from './YourEventHistory';
// // import { toBeInTheDocument } from '@testing-library/jest-dom';
// import { getByText } from '@testing-library/react';
// import '../__tests__/utilityFunctions.test';


// // expect.extend({ toBeInTheDocument });

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

//   const { getByText } = render(<YourEventHistory />);

//   // Wait for the event details to be fetched/rendered
//   await waitFor(() => {
//     expect(getByText('Your Current Event')).toBeInTheDocument();
//     expect(getByText('Event Name: Test Event')).toBeInTheDocument();
//   });
// });
