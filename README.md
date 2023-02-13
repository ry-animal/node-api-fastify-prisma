# REST API with Fastify & Prisma

## Frameworks / Tooling

- Fastify - Web server
- Prisma - Database ORM
- Zod - Request and response validation
- Swagger - API docs
- TypeScript - Types & other cool stuff

## Features

- Create a user
- Login
- List users
- Create a product
- List products
- Authentication
- Request & response validation
- Swagger docs

## Testing

- [Node Tap](https://node-tap.org/) - Test framework
- [fastify.inject](https://www.fastify.io/docs/latest/Guides/Testing/#benefits-of-using-fastifyinject) - Inject HTTP requests
- [faker-js](@faker-js/faker) - Generate test data
- [ts-mock-imports](https://www.npmjs.com/package/ts-mock-imports) - Mock imports

## Prisma

- If you want to modify the database schema,

  - Edit [schema.prisma](prisma/schema.prisma)
  - Then, generate a new migration, `yarn prisma migrate dev --name <name-of-your-migration>`
    - This will also apply the migration
  - [Data Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)
  - [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client/crud)

- To inspect the database:
  - With a UI, `yarn run db-ui`
