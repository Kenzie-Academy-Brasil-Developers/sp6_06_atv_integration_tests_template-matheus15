"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const data_source_1 = require("../../data-source");
const user_entity_1 = require("../../entities/user.entity");
const error_1 = require("../../error");
const createSessionService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const foundUser = yield userRepo.findOneBy({ email: payload.email });
    if (!foundUser) {
        throw new error_1.AppError("Invalid credentials", 401);
    }
    const validPassword = yield (0, bcryptjs_1.compare)(payload.password, foundUser.password);
    if (!validPassword) {
        throw new error_1.AppError("Invalid credentials", 401);
    }
    const token = (0, jsonwebtoken_1.sign)({ email: foundUser.email }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRES_IN,
        subject: foundUser.id.toString(),
    });
    return { token };
});
exports.default = createSessionService;
//# sourceMappingURL=create.service.js.map