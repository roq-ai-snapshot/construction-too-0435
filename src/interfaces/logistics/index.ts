import { UserInterface } from 'interfaces/user';
import { OutletInterface } from 'interfaces/outlet';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface LogisticsInterface {
  id?: string;
  logistics_manager_id: string;
  outlet_id: string;
  tool_id: string;
  status?: string;
  delivery_date?: any;
  return_date?: any;
  notes?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  outlet?: OutletInterface;
  tool?: ToolInterface;
  _count?: {};
}

export interface LogisticsGetQueryInterface extends GetQueryInterface {
  id?: string;
  logistics_manager_id?: string;
  outlet_id?: string;
  tool_id?: string;
  status?: string;
  notes?: string;
}
