"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xml_file_saver_1 = require("./text/xml-file-saver");
const express_1 = __importDefault(require("express"));
// tslint:disable-next-line:no-var-requires
const cors = require('cors');
const app = express_1.default();
const port = 3080;
const xmlFileSaver = new xml_file_saver_1.XMLFileSaver();
app.use(cors());
app.get("/", (req, res) => {
    res.send(xmlFileSaver.saveFile('match', []));
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map