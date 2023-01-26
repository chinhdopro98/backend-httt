import { DataSource } from "typeorm";
import "dotenv/config";

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: (process.env.DB_PASSWORD).toString(),
  database: process.env.DB_NAME,
  logging: true,
  synchronize: true,
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ["dist/src/migrations/*.js"],
}) 
