import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomerConfirmationModal = ({ show, onConfirm, onCancel }) => {
  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Action</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to do this?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomerConfirmationModal;
