# API de Pedidos

API construída com **NestJS**, **Node.js** e **PostgreSQL**.  
Permite criar e buscar pedidos, com migrations gerenciadas pelo TypeORM.

## Tecnologias

- Node.js
- NestJS
- TypeScript
- PostgreSQL (Docker)
- TypeORM
- Docker / docker-compose

## Pré-requisitos

- Node.js >= 18
- npm
- Docker & Docker Compose

## Rodando o projeto

1. Clonar o repositório:
 
git clone https://github.com/lucasviola1/orders-project
cd https://github.com/lucasviola1/orders-project

2. Instalar dependências:

npm install

3. Subir o PostgreSQL via Docker:

docker-compose up -d

4. Rodar migrations:
   
npm run migration:generate
npm run migration:run

5. Rodar a API:

npm run start:dev
A API vai rodar em http://localhost:3000.

Endpoints
Criar pedido: POST /orders

{
  "orderId": "ORD-017",
  "customer": "Lucas",
  "total": 199.9
}

Buscar pedido: GET /orders/:orderId
