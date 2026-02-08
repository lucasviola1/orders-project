import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './presentation/orders/orders.controller';
import { OrderOrmEntity } from './infrastructure/database/typeorm/order.orm-entity';
import { CreateOrderUseCase } from './application/orders/create-order.usecase';
import { ProcessOrderUseCase } from './application/orders/process-order.usecase';
import { GetOrderUseCase } from './application/orders/get-order.usecase';
import { OrderProcessor } from './infrastructure/async/order.processor';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderOrmEntity]),
  ],
  controllers: [OrdersController],
  providers: [
    CreateOrderUseCase,
    ProcessOrderUseCase,
    GetOrderUseCase,
    OrderProcessor,
  ],
})
export class OrdersModule {}
