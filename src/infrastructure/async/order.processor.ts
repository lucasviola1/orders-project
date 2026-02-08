import { Injectable } from '@nestjs/common';
import { ProcessOrderUseCase } from '../../application/orders/process-order.usecase';

@Injectable()
export class OrderProcessor {
  constructor(
    private readonly processOrder: ProcessOrderUseCase,
  ) {}

  process(orderId: string) {
    setTimeout(() => {
      this.processOrder.execute(orderId);
    }, 2000);
  }
}
