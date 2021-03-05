import * as fs from "fs";
import * as convert from "xml-js";
import * as path from "path";

export class XMLFileSaver {
  saveFile(filename: string, properties: any): boolean {
    const headerString = '<?xml version="1.0" encoding="utf-8"?>\n';
    const xmlString = convert.js2xml(
      {
        scoreboard: {
          player1Name: "WindGodDude",
          player2Name: "DrunkSuika",
          player1Score: 3,
          player2Score: 0,
        },
      },
      { compact: true, spaces: 2 }
    );

    fs.writeFile("file.xml", headerString + xmlString, () => {
      console.log("wrote file");
    });

    return true;
  }
}
