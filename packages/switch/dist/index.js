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
exports.default = Switch;
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const colors_1 = require("./props/colors");
require("./styles/index.css");
function Switch(_a) {
    var { color = 'purple', id, label, checked = false, disabled = false, onChange } = _a, rest = __rest(_a, ["color", "id", "label", "checked", "disabled", "onChange"]);
    const [isChecked, setIsChecked] = (0, react_1.useState)(checked);
    (0, react_1.useEffect)(() => {
        setIsChecked(checked);
    }, [checked]);
    const handleSwitchChange = (event) => {
        setIsChecked(event.target.checked);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    const switchClassName = (0, clsx_1.default)('relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all', {
        [colors_1.colors[color]]: isChecked,
        'opacity-20 cursor-not-allowed': disabled,
        'cursor-pointer': !disabled
    });
    return (react_1.default.createElement("label", { className: 'inline-flex items-center' },
        react_1.default.createElement("input", Object.assign({ type: 'checkbox', value: '', className: 'sr-only peer', checked: isChecked, onChange: handleSwitchChange, disabled: disabled }, rest)),
        react_1.default.createElement("div", { className: switchClassName }),
        label && (react_1.default.createElement("span", { className: `ms-3 text-xs font-normal text-gray-900 ${disabled ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'}` }, label))));
}
