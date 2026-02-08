import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { OrdersModule } from './orders.module';

@Module({
  imports: [
    DatabaseModule,
    OrdersModule,
  ],
})
export class AppModule {}
