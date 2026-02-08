import { Injectable, Inject } from '@nestjs/common';
import type { OrderRepository } from '../../domain/orders/order.repository';
import { OrderStatus } from '../../domain/orders/order-status.enum';
import { OrderOrmEntity } from 'src/infrastructure/database/typeorm/order.orm-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProcessOrderUseCase {
  constructor(
    @InjectRepository(OrderOrmEntity)
    private readonly repo: Repository<OrderOrmEntity>,
  ) {}

  async execute(orderId: string) {
    console.log('Updating order:', orderId);
    const order = await this.repo.findOneBy({orderId});
    console.log('Found order:', order);
    if (!order) return;

    order.status = OrderStatus.PROCESSED;
    await this.repo.save(order);
  }
}
