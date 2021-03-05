import * as fs from "fs";
import * as convert from "xml-js";

export class XMLFileSaver {
  saveFile(filename: string, properties: any): boolean {
    const xmlString = convert.js2xml(
      {
        player1Name: "WindGodDude",
        player2Name: "DrunkSuika",
        player1Score: 3,
        player2Score: 0,
      },
      { compact: true, spaces: 2 }
    );
    console.log(xmlString);

    return true;
  }
}
