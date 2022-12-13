# Fullstack Example with Prisma.js And Next.js

This example with Prisma and Nextjs, uses MySQL as database, the DB basic schema is defined bellow:

![db schema](./public/schema.png)

## Getting started
### 1. Clone this repository

```bash
git clone git@github.com:JI-Villalobos/luan-clients.git
```
install repositories
```bash
yarn install  
```

### 2. Set Database ```url```  as environment variable
create the ```.env``` file at the root level:
```bash
touch .env
```
Define your environment variable
```code
DATABASE_URL="mysql://user:password@localhost:3306/db_name"
```
 
### 3. Create the database
The prisma ```migration.sql```  on [`./prisma/migrations/safe/migration.sql`](./prisma/migrations/safe/migration.sql) contains the query instructions to create all the db tables

### 4. Start the app
```bash
yarn dev
``` 
Navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser.

## Usage with Docker

Make sure to replace the url database in the ```docker-compose.yml``` file.
```yml
services:
  app:
    build: .
    environment:
      DATABASE_URL: "mysql://user:password@localhost:3306/db_name"
```

Build and run with docker compose 
```bash
docker compose up -d --build
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
