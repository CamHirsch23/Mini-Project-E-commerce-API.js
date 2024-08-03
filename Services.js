import axios from 'axios';

const API_BASE_URL = 'http://yourapi.com/api';

export const createCustomer = async (customerData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/customers`, customerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCustomer = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/customers/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCustomer = async (id, customerData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/customers/${id}`, customerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/customers/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
