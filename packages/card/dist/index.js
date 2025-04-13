"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const radius_1 = require("./props/radius");
const shadow_1 = require("./props/shadow");
require("./styles/index.css");
function Card({ children, classNames, shadow = 'md', radius = 'md', isBordered = false }) {
    const cardClassNames = (0, clsx_1.default)('card', radius_1.radius[radius], shadow_1.shadow[shadow], isBordered && 'border border-gray-200', classNames);
    return react_1.default.createElement("div", { className: cardClassNames }, children);
}
