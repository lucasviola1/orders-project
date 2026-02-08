import { DataSource } from 'typeorm';
import { join } from 'path';
import { OrderOrmEntity } from './src/infrastructure/database/typeorm/order.orm-entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'orders',

  entities: [OrderOrmEntity],

  migrations: [
    join(__dirname, 'src', 'migrations', '*.ts'),
  ],
});
