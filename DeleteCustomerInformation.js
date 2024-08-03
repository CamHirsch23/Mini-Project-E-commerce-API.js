import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const DeleteCustomer = ({ customerId, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        const response = await axios.delete(`http://localhost:3001/customers/${customerId}`);
        if (response.status === 200) {
          alert('Customer deleted successfully');
          onDelete();
        } else {
          alert('Failed to delete customer');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete Customer
    </Button>
  );
};

export default DeleteCustomer;
