import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ConfirmationModal from './ConfirmationModal';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`/api/products/${id}`)
      .then(() => {
        // Handle success
        console.log('Product deleted');
        history.push('/products'); // Redirect to the product list page
      })
      .catch(error => {
        // Handle error
        console.error('Error deleting product:', error);
      });
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div>
        {/* Product details here */}
        <Button variant="danger" onClick={openModal}>
          Delete Product
        </Button>
      </div>
      <ConfirmationModal
        show={showModal}
        handleClose={closeModal}
        handleConfirm={() => {
          handleDelete();
          closeModal();
        }}
        title="Confirm Deletion"
        body={`Are you sure you want to delete ${product.name}? This action cannot be undone.`}
      />
    </>
  );
};

export default ProductDetails;
