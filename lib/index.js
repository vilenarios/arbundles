"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTags = exports.verifyBundle = exports.unbundleData = exports.bundleAndSignData = exports.createData = exports.DataItem = exports.Bundle = void 0;
const tslib_1 = require("tslib");
const ar_data_create_1 = require("./ar-data-create");
Object.defineProperty(exports, "createData", { enumerable: true, get: function () { return ar_data_create_1.createData; } });
const ar_data_bundle_1 = require("./ar-data-bundle");
Object.defineProperty(exports, "bundleAndSignData", { enumerable: true, get: function () { return ar_data_bundle_1.bundleAndSignData; } });
Object.defineProperty(exports, "unbundleData", { enumerable: true, get: function () { return ar_data_bundle_1.unbundleData; } });
const ar_data_verify_1 = require("./ar-data-verify");
Object.defineProperty(exports, "verifyBundle", { enumerable: true, get: function () { return ar_data_verify_1.verifyBundle; } });
const Bundle_1 = tslib_1.__importDefault(require("./Bundle"));
exports.Bundle = Bundle_1.default;
const DataItem_1 = tslib_1.__importDefault(require("./DataItem"));
exports.DataItem = DataItem_1.default;
const parser_1 = require("./parser");
const checkTags = parser_1.tagsParser.isValid;
exports.checkTags = checkTags;
//# sourceMappingURL=index.js.map