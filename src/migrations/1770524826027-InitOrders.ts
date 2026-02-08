import { MigrationInterface, QueryRunner } from "typeorm";

export class InitOrders1770524826027 implements MigrationInterface {
    name = 'InitOrders1770524826027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "orderId" character varying NOT NULL, "customer" character varying NOT NULL, "total" numeric(10,2) NOT NULL, "status" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_41ba27842ac1a2c24817ca59eaa" UNIQUE ("orderId"), CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
