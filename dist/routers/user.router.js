"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const serializers_1 = require("../serializers");
const userRouter = (0, express_1.Router)();
userRouter.get("", controllers_1.listUsersController);
userRouter.post("", (0, middlewares_1.validateSchemaMiddleware)(serializers_1.userBodySerializer), controllers_1.createUserController);
userRouter.get("/:id", middlewares_1.verifyTokenMiddleware, controllers_1.retrieveUserController);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map