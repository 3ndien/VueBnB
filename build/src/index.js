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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnect_1 = require("./utils/dbConnect");
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("./utils/logger"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const port = config_1.default.get('port');
app.use(express_1.default.json());
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`app is running on http://localhost:${port}`);
    yield (0, dbConnect_1.connect)();
    (0, router_1.default)(app);
}));
//# sourceMappingURL=index.js.map