"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../error");
const typeorm_1 = require("typeorm");
const yup_1 = require("yup");
const handleErrorMiddleware = (err, req, res, next) => {
    if (err instanceof error_1.AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    if (err instanceof typeorm_1.EntityNotFoundError) {
        return res.status(404).json({ message: "Not found" });
    }
    if (err instanceof yup_1.ValidationError) {
        return res.status(400).json({ message: err.errors });
    }
    if (err instanceof typeorm_1.QueryFailedError && err.message.includes("unique")) {
        const message = err.driverError.detail;
        return res.status(409).json({ message });
    }
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error!" });
};
exports.default = handleErrorMiddleware;
//# sourceMappingURL=errorHandle.middleware.js.map