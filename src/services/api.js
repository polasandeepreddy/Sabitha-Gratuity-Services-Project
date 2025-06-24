import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact/', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error occurred' };
  }
};

// Testimonials
export const getTestimonials = async () => {
  try {
    const response = await api.get('/testimonials/');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch testimonials' };
  }
};

export const submitTestimonial = async (testimonialData) => {
  try {
    const response = await api.post('/testimonials/', testimonialData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to submit testimonial' };
  }
};

// Health check
export const healthCheck = async () => {
  try {
    const response = await api.get('/health/');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'API health check failed' };
  }
};

export default api;