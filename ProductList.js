import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <ListGroup>
      {products.map(product => (
        <ListGroup.Item key={product.id}>
          {product.name} - ${product.price}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ProductList;
