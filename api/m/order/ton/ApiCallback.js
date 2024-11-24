"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(call) {
    // TODO
    console.log('req:', call.req);
    // call.error('API Not Implemented');
    call.succ({ status: "ok" });
}
exports.default = default_1;
