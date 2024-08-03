// src/components/customers/CreateCustomerForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateCustomerForm = () => {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/customers', customer);
      alert('Customer created successfully');
    } catch (error) {
      console.error('Error creating customer', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={customer.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={customer.email} onChange={handleChange} placeholder="Email" required />
      <input type="tel" name="phone" value={customer.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CreateCustomerForm;
