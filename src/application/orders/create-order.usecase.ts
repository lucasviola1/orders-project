import { Injectable, Inject } from '@nestjs/common';
import type { OrderRepository } from '../../domain/orders/order.repository';
import { Order } from '../../domain/orders/order.entity';
import { OrderStatus } from '../../domain/orders/order-status.enum';
import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';
import { OrderOrmEntity } from 'src/infrastructure/database/typeorm/order.orm-entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @InjectRepository(OrderOrmEntity)
    private readonly repo: Repository<OrderOrmEntity>,
  ) {}

  async execute(input: {
    orderId: string;
    customer: string;
    total: number;
  }) {
    const existing = await this.repo.findOneBy({
      orderId: input.orderId,
    });

    if (existing) {
      throw new Error('Order already exists');
    }

    const order = this.repo.create({
      orderId: input.orderId,
      customer: input.customer,
      total: input.total,
      status: 'PENDING',
    });

    await this.repo.save(order);

    return order;
  }
}

