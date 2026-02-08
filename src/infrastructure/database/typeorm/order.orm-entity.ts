import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Unique,
} from 'typeorm';

@Entity('orders')
@Unique(['orderId'])
export class OrderOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orderId: string;

  @Column()
  customer: string;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
