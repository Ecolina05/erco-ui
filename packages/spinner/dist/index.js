"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Spinner;
const react_1 = __importDefault(require("react"));
const colors_1 = require("./props/colors");
const sizes_1 = require("./props/sizes");
require("./styles/index.css");
function Spinner({ color = 'purple', size = 'sm' }) {
    return react_1.default.createElement("figure", { className: `spinner ${colors_1.colors[color]} ${sizes_1.sizes[size]}` });
}
