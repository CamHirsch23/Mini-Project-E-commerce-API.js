import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const UpdateProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => {
        setName(response.data.name);
        setPrice(response.data.price);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/products/${id}`, { name, price })
      .then(response => {
        // Handle success
        console.log('Product updated:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error updating product:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default UpdateProductForm;
