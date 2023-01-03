"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/users", routers_1.userRouter);
app.use("/api/login", routers_1.sessionRouter);
app.use(middlewares_1.handleErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map