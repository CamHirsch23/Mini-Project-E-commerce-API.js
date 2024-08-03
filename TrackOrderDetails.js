import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const TrackOrderStatus = () => {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/orders/${id}/status`)
      .then(response => setOrder(response.data))
      .catch(error => console.error('Error fetching order status:', error));
  }, [id]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Order Status</Card.Title>
        <Card.Text>Order Date: {order.orderDate}</Card.Text>
        <Card.Text>Expected Delivery Date: {order.expectedDeliveryDate}</Card.Text>
        <Card.Text>Status: {order.status}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TrackOrderStatus;
