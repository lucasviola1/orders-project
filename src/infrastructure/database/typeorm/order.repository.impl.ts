import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderRepository } from '../../../domain/orders/order.repository';
import { Order } from '../../../domain/orders/order.entity';
import { OrderOrmEntity } from './order.orm-entity';

@Injectable()
export class OrderRepositoryImpl implements OrderRepository {
  constructor(
    @InjectRepository(OrderOrmEntity)
    private readonly repo: Repository<OrderOrmEntity>,
  ) {}

  async save(order: Order): Promise<void> {
    await this.repo.save(order);
  }

  async findByOrderId(orderId: string): Promise<Order | null> {
    return this.repo.findOne({ where: { orderId } }) as any;
  }

  async findById(id: string): Promise<Order | null> {
    return this.repo.findOne({ where: { id } }) as any;
  }
}
