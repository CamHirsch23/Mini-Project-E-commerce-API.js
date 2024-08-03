import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const PlaceOrderForm = () => {
  const [orderDate, setOrderDate] = useState('');
  const [customer, setCustomer] = useState('');
  const [products, setProducts] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/orders', { orderDate, customer, products })
      .then(response => {
        console.log('Order placed:', response.data);
      })
      .catch(error => {
        console.error('Error placing order:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Order Date</Form.Label>
        <Form.Control
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Customer</Form.Label>
        <Form.Control
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Products</Form.Label>
        <Form.Control
          type="text"
          value={products}
          onChange={(e) => setProducts(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Place Order
      </Button>
    </Form>
  );
};

export default PlaceOrderForm;
