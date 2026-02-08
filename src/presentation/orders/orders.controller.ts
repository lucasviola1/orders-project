import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { CreateOrderUseCase } from '../../application/orders/create-order.usecase';
import { OrderProcessor } from '../../infrastructure/async/order.processor';
import { CreateOrderDto } from './dto/create-order.dto';
import { GetOrderUseCase } from 'src/application/orders/get-order.usecase';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly createOrder: CreateOrderUseCase,
    private readonly getOrder: GetOrderUseCase,
    private readonly processor: OrderProcessor,
  ) { }

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    const order = await this.createOrder.execute(dto);
    this.processor.process(order.orderId);

    return {
      id: order.id,
      status: order.status,
    };
  }

  @Get(':orderId')
  async find(@Param('orderId') orderId: string) {
    return this.getOrder.execute(orderId);
  }
}
