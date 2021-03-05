"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLFileSaver = void 0;
const fs = __importStar(require("fs"));
const convert = __importStar(require("xml-js"));
class XMLFileSaver {
    saveFile(filename, properties) {
        const headerString = '<?xml version="1.0" encoding="utf-8"?>\n';
        const xmlString = convert.js2xml({
            scoreboard: {
                player1Name: "WindGodDude",
                player2Name: "DrunkSuika",
                player1Score: 3,
                player2Score: 0,
            },
        }, { compact: true, spaces: 2 });
        fs.writeFile("file.xml", headerString + xmlString, () => {
            console.log("wrote file");
        });
        return true;
    }
}
exports.XMLFileSaver = XMLFileSaver;
//# sourceMappingURL=xml-file-saver.js.map