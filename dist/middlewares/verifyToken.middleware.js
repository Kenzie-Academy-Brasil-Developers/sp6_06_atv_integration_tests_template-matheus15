"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const error_1 = require("../error");
const verifyTokenMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        throw new error_1.AppError("Missing Authorization Token", 401);
    }
    const token = authorization.split(" ")[1];
    return (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: err.message });
        }
        req.decoded = decoded;
        return next();
    });
};
exports.default = verifyTokenMiddleware;
//# sourceMappingURL=verifyToken.middleware.js.map