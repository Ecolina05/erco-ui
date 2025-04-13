"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Input;
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const radius_1 = require("./props/radius");
const border_colors_1 = require("./props/border-colors");
require("./styles/index.css");
function Input(_a) {
    var { borderColor = 'purple', classNames, id, isRequired, label, placeholder, radius = 'lg' } = _a, rest = __rest(_a, ["borderColor", "classNames", "id", "isRequired", "label", "placeholder", "radius"]);
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const inputClassNames = (0, clsx_1.default)('input', radius_1.radius[radius], isFocused && border_colors_1.borderColor[borderColor], classNames);
    return (react_1.default.createElement("div", null,
        label && (react_1.default.createElement("label", { htmlFor: id, className: 'block mb-1 text-xs text-gray-900' }, label)),
        react_1.default.createElement("input", Object.assign({ type: 'text', id: id, className: inputClassNames, placeholder: placeholder, required: isRequired, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false) }, rest))));
}
