"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const roomSchema = new mongoose_1.default.Schema({
    type: {
        type: [
            {
                type: String,
                enum: ['Hotel', 'House', 'Bungalow'],
                default: ['Bungalow']
            }
        ]
    }
});
const RoomModel = mongoose_1.default.model('Rooms', roomSchema);
exports.default = RoomModel;
//# sourceMappingURL=room.js.map