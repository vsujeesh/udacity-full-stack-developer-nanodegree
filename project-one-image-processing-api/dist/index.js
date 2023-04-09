"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageResizerApp = (0, express_1.default)();
const port = 3000;
imageResizerApp.get("/", (req, res) => {
  res.send("Hello World");
});
imageResizerApp.listen(port, () => {
  console.log(`Image resizer app is up and running, listening on port ${port}`);
});
