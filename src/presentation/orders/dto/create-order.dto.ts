import { IsString, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  orderId: string;

  @IsString()
  customer: string;

  @IsNumber()
  total: number;
}
