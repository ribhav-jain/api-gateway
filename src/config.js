require("dotenv").config();
const path = require("path"); // Importing path module to handle file paths

const PORT = process.env.PORT || 7000;
const API_TARGET = process.env.API_TARGET || "http://example.com";
const DOCUMENT_ROOT =
    process.env.DOCUMENT_ROOT || path.resolve(__dirname, "../public");

module.exports = { PORT, API_TARGET, DOCUMENT_ROOT };
