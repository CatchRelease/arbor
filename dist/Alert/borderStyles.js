"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (intent) => ({
    borderLeft: intent ? '3px solid' : null,
    borderColor: `intent.${intent}.default`
});
