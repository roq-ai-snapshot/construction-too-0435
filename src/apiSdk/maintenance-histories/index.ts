import axios from 'axios';
import queryString from 'query-string';
import { MaintenanceHistoryInterface, MaintenanceHistoryGetQueryInterface } from 'interfaces/maintenance-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMaintenanceHistories = async (
  query?: MaintenanceHistoryGetQueryInterface,
): Promise<PaginatedInterface<MaintenanceHistoryInterface>> => {
  const response = await axios.get('/api/maintenance-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMaintenanceHistory = async (maintenanceHistory: MaintenanceHistoryInterface) => {
  const response = await axios.post('/api/maintenance-histories', maintenanceHistory);
  return response.data;
};

export const updateMaintenanceHistoryById = async (id: string, maintenanceHistory: MaintenanceHistoryInterface) => {
  const response = await axios.put(`/api/maintenance-histories/${id}`, maintenanceHistory);
  return response.data;
};

export const getMaintenanceHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/maintenance-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteMaintenanceHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/maintenance-histories/${id}`);
  return response.data;
};
