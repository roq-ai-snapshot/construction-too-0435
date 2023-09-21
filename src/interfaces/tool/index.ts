import { LogisticsInterface } from 'interfaces/logistics';
import { RentalInterface } from 'interfaces/rental';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  price_per_day?: number;
  availability?: boolean;
  outlet_id: string;
  category?: string;
  condition?: string;
  created_at?: any;
  updated_at?: any;
  logistics?: LogisticsInterface[];
  rental?: RentalInterface[];
  outlet?: OutletInterface;
  _count?: {
    logistics?: number;
    rental?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  outlet_id?: string;
  category?: string;
  condition?: string;
}
