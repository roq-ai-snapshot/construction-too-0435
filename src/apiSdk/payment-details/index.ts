import axios from 'axios';
import queryString from 'query-string';
import { PaymentDetailsInterface, PaymentDetailsGetQueryInterface } from 'interfaces/payment-details';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPaymentDetails = async (
  query?: PaymentDetailsGetQueryInterface,
): Promise<PaginatedInterface<PaymentDetailsInterface>> => {
  const response = await axios.get('/api/payment-details', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPaymentDetails = async (paymentDetails: PaymentDetailsInterface) => {
  const response = await axios.post('/api/payment-details', paymentDetails);
  return response.data;
};

export const updatePaymentDetailsById = async (id: string, paymentDetails: PaymentDetailsInterface) => {
  const response = await axios.put(`/api/payment-details/${id}`, paymentDetails);
  return response.data;
};

export const getPaymentDetailsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/payment-details/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePaymentDetailsById = async (id: string) => {
  const response = await axios.delete(`/api/payment-details/${id}`);
  return response.data;
};
