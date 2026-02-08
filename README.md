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

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <PASTA_DO_PROJETO>
Instalar dependências:

npm install
Subir o PostgreSQL via Docker:

docker-compose up -d
Rodar migrations:

npm run migration:run
Rodar a API:

npm run start:dev
A API vai rodar em http://localhost:3000.

Endpoints
Criar pedido: POST /orders

{
  "customer": "Lucas",
  "total": 100
}
Buscar pedido: GET /orders/:orderId

Dica: Todas as alterações de banco devem ser feitas via migrations.


---

Se você quiser, posso também **criar um arquivo `docker-compose.yml` pronto para PostgreSQL** que já funcione com este README, assim qualquer pessoa consegue rodar a API com apenas 3 comandos (`docker-compose up`, `npm run migration:run` e `npm run start:dev`).  

Quer que eu faça isso?

Você disse:
Um arquivo, para eu copior e colar

O ChatGPT disse:
Perfeito! Aqui está o README.md pronto que você pode copiar e colar diretamente na raiz do seu projeto:

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

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <PASTA_DO_PROJETO>
Instalar dependências:

npm install
Subir o PostgreSQL via Docker:

docker-compose up -d
Rodar migrations:

npm run migration:generate
npm run migration:run
Rodar a API:

npm run start:dev
