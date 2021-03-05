import { XMLFileSaver } from './text/xml-file-saver';
import express from "express";
// const cors = require('cors');
const app = express()
const port = 3080;

const xmlFileSaver: XMLFileSaver = new XMLFileSaver();

// app.use(cors());

app.get("/", (req, res) => {
  res.send(xmlFileSaver.saveFile('match', []));
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
