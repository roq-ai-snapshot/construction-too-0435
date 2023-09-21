import { GetQueryInterface } from 'interfaces';

export interface MaintenanceHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MaintenanceHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
