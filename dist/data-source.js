"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
const path_1 = __importDefault(require("path"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dataSourceConfig = () => {
    const entitiesPath = path_1.default.join(__dirname, "./entities/*.{js,ts}");
    const migrationsPath = path_1.default.join(__dirname, "./migrations/*.{js,ts}");
    const nodeEnv = process.env.NODE_ENV;
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
exports.AppDataSource = new typeorm_1.DataSource(dataSourceConfig());
//# sourceMappingURL=data-source.js.map