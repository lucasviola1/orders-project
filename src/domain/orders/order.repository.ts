import { Order } from './order.entity';

export interface OrderRepository {
  save(order: Order): Promise<void>;
  findByOrderId(orderId: string): Promise<Order | null>;
  findById(id: string): Promise<Order | null>;
}
