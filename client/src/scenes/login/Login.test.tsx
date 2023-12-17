// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import axios from 'axios';
// import Login from './Login';

// jest.mock('axios');

// describe('Login Component', () => {
//   beforeEach(() => {
//     (axios.post as jest.Mock).mockClear();
//   });

//   it('renders without crashing', () => {
//     render(<Login />);
//     // You can add more specific assertions based on your component's structure
//     expect(screen.getByText('Login')).toBeInTheDocument();
//   });

//   it('handles form submission correctly', async () => {
//     render(<Login />);

//     // Mock the axios post request
//     (axios.post as jest.Mock).mockResolvedValue({ data: { /* mock user data */ } });

//     fireEvent.change(screen.getByPlaceholderText('Email'), {
//       target: { value: 'test@example.com' },
//     });

//     fireEvent.change(screen.getByPlaceholderText('Password'), {
//       target: { value: 'password123' },
//     });

//     fireEvent.click(screen.getByText('LOGIN'));

//     // Wait for the async operation to complete (axios post request)
//     await waitFor(() => {
//       // Add assertions based on your expected behavior after form submission
//       expect(axios.post).toHaveBeenCalledWith('/auth/login', {
//         email: 'test@example.com',
//         password: 'password123',
//       });
//       // You may also check if the user is redirected or other actions are dispatched
//     });
//   });
// });
