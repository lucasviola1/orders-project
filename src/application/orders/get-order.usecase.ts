import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderOrmEntity } from '../../infrastructure/database/typeorm/order.orm-entity';

@Injectable()
export class GetOrderUseCase {
  constructor(
    @InjectRepository(OrderOrmEntity)
    private readonly repo: Repository<OrderOrmEntity>,
  ) {}

  async execute(orderId: string) {
    const order = await this.repo.findOneBy({ orderId });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return {
      orderId: order.orderId,
      status: order.status,
      createdAt: order.createdAt,
    };
  }
}

