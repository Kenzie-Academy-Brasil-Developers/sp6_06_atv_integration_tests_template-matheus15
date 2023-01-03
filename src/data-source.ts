import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/*.{js,ts}");
  const migrationsPath: string = path.join(__dirname, "./migrations/*.{js,ts}");

  const nodeEnv: string = process.env.NODE_ENV;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.PGDATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    logging: false,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
