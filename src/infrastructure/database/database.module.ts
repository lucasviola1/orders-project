import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderOrmEntity } from './typeorm/order.orm-entity';
import { OrderRepositoryImpl } from './typeorm/order.repository.impl';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'orders',
      autoLoadEntities: true,
      synchronize: false,
    }),
    TypeOrmModule.forFeature([OrderOrmEntity]),
  ],
  providers: [
    {
      provide: 'OrderRepository',
      useClass: OrderRepositoryImpl,
    },
  ],
  exports: ['OrderRepository'],
})
export class DatabaseModule {}
