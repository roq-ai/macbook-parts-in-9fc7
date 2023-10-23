import { InventoryInterface } from 'interfaces/inventory';
import { OrderItemInterface } from 'interfaces/order-item';
import { SupplierInterface } from 'interfaces/supplier';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  supplier_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  order_item?: OrderItemInterface[];
  supplier?: SupplierInterface;
  _count?: {
    inventory?: number;
    order_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  supplier_id?: string;
}
