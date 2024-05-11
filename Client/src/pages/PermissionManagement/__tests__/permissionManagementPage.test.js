import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios'; // Mocking axios for testing
import PermissionManagementPage from '../PermissionManagementPage';

// Mocking axios get method
jest.mock('axios');

// Mocking userData response
const mockUserData = [
  {
    _id: '1',
    username: 'testuser1',
    email: 'testuser1@example.com',
    validTime: 'one day',
    role: 'Admin',
    roleStatus: 'active'
  },
  {
    _id: '2',
    username: 'testuser2',
    email: 'testuser2@example.com',
    validTime: 'one week',
    role: 'Manager',
    roleStatus: 'active'
  }
];

describe('PermissionManagementPage', () => {
  beforeEach(() => {
    // Mocking axios get method implementation
    axios.get.mockResolvedValue({ data: mockUserData });
  });

  it('should render loading spinner initially', async () => {
    render(<PermissionManagementPage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render user data after loading', async () => {
    render(<PermissionManagementPage />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByText('testuser1')).toBeInTheDocument();
    expect(screen.getByText('testuser1@example.com')).toBeInTheDocument();
    expect(screen.getByText('one day')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('testuser2')).toBeInTheDocument();
    expect(screen.getByText('testuser2@example.com')).toBeInTheDocument();
    expect(screen.getByText('one week')).toBeInTheDocument();
    expect(screen.getByText('Manager')).toBeInTheDocument();
  });

  it('should filter user data based on search input', async () => {
    render(<PermissionManagementPage />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    
    // Type 'testuser1' in the search input
    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'testuser1' } });

    // Assert that only 'testuser1' data is rendered
    expect(screen.getByText('testuser1')).toBeInTheDocument();
    expect(screen.getByText('testuser1@example.com')).toBeInTheDocument();
    expect(screen.getByText('one day')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.queryByText('testuser2')).not.toBeInTheDocument();
    expect(screen.queryByText('testuser2@example.com')).not.toBeInTheDocument();
    expect(screen.queryByText('one week')).not.toBeInTheDocument();
    expect(screen.queryByText('Manager')).not.toBeInTheDocument();
  });

});
