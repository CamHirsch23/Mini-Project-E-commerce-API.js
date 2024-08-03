import axios from 'axios';

const API_BASE_URL = 'http://yourapi.com/api';

// Customer API Endpoints
export const createCustomer = async (customerData) => {
  const response = await axios.post(`${API_BASE_URL}/customers`, customerData);
  return response.data;
};

export const getCustomer = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/customers/${id}`);
  return response.data;
};

export const updateCustomer = async (id, customerData) => {
  const response = await axios.put(`${API_BASE_URL}/customers/${id}`, customerData);
  return response.data;
};

export const deleteCustomer = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/customers/${id}`);
  return response.data;
};

// Product API Endpoints
export const createProduct = async (productData) => {
  const response = await axios.post(`${API_BASE_URL}/products`, productData);
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await axios.put(`${API_BASE_URL}/products/${id}`, productData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/products/${id}`);
  return response.data;
};

// Order API Endpoints
export const placeOrder = async (orderData) => {
  const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
  return response.data;
};

export const getOrderDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/orders/${id}`);
  return response.data;
};

export const trackOrder = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/orders/${id}/status`);
  return response.data;
};
