"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const serializers_1 = require("../serializers");
const sessionRouter = (0, express_1.Router)();
sessionRouter.post("", (0, middlewares_1.validateSchemaMiddleware)(serializers_1.sessionBodySerializer), controllers_1.createSessionController);
exports.default = sessionRouter;
//# sourceMappingURL=session.router.js.map