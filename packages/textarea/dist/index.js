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
exports.default = Textarea;
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const radius_1 = require("./props/radius");
const border_colors_1 = require("./props/border-colors");
require("./styles/index.css");
function Textarea(_a) {
    var { borderColor = 'purple', description, id, textareaClassNames, isRequired, label, labelClassNames, placeholder, radius = 'lg' } = _a, rest = __rest(_a, ["borderColor", "description", "id", "textareaClassNames", "isRequired", "label", "labelClassNames", "placeholder", "radius"]);
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const textareaClassName = (0, clsx_1.default)('textarea', radius_1.radius[radius], isFocused && border_colors_1.borderColor[borderColor], textareaClassNames);
    const labelClassName = (0, clsx_1.default)('block mb-1 text-xs text-gray-900', labelClassNames);
    return (react_1.default.createElement("div", null,
        label && (react_1.default.createElement("label", { htmlFor: id, className: labelClassName }, label)),
        react_1.default.createElement("textarea", Object.assign({ className: textareaClassName, id: id, onBlur: () => setIsFocused(false), onFocus: () => setIsFocused(true), placeholder: placeholder, required: isRequired }, rest)),
        description && react_1.default.createElement("p", { className: 'text-xs font-light text-gray-500 mt-1 italic' }, description)));
}
