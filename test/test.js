// For test only
const md = require("markdown-it")();
const ignore_imports_plugin = require("../index.js");

md.use(ignore_imports_plugin);

const markdownString = `
import * as MyComponents from "my-component";

# Hello

*world*!
`;

const htmlString = md.render(markdownString);
console.log(htmlString);
