import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateCustomerForm = () => {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const validateForm = () => {
    const { name, email, phone } = customer;
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!phone) errors.phone = 'Phone is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.post('http://localhost:3001/customers', customer);
        if (response.status === 201) {
          alert('Customer created successfully');
          setCustomer({ name: '', email: '', phone: '' });
        } else {
          alert('Failed to create customer');
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Add Customer</h3>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </Form>
  );
};

export default CreateCustomerForm;
