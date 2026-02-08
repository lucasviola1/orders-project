import { OrderStatus } from './order-status.enum';

export class Order {
  constructor(
    public readonly id: string,
    public readonly orderId: string,
    public readonly customer: string,
    public readonly total: number,
    public status: OrderStatus,
    public readonly createdAt: Date,
  ) {}
}
