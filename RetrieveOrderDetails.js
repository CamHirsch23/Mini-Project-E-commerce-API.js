import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const OrderDetails = () => {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/orders/${id}`)
      .then(response => setOrder(response.data))
      .catch(error => console.error('Error fetching order details:', error));
  }, [id]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Order Details</Card.Title>
        <Card.Text>Order Date: {order.orderDate}</Card.Text>
        <Card.Text>Customer: {order.customer}</Card.Text>
        <Card.Text>Products: {order.products}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OrderDetails;
