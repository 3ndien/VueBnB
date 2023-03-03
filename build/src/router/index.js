"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postController_1 = __importDefault(require("../controllers/postController"));
function routes(app) {
    app.get('/', (req, res) => {
        res.status(200);
    });
    app.get('/creatPost', postController_1.default.createPost);
}
exports.default = routes;
//# sourceMappingURL=index.js.map