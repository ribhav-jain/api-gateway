const express = require("express");
const path = require("path");
const { DOCUMENT_ROOT } = require("./config");

/**
 * Serves static files and handles the base route.
 * This middleware allows you to serve static content (like HTML, CSS, JS) from the specified directory.
 *
 * @param {Express} app - The Express application instance to which the middleware is applied.
 */
const serveStaticFiles = (app) => {
    // Serve all static files from the DOCUMENT_ROOT directory
    app.use(express.static(DOCUMENT_ROOT));

    /**
     * Handles the base route ("/") by sending the "index.html" file.
     * This serves as the entry point for your web application, typically used for single-page applications (SPA).
     *
     * @param {Object} req - The incoming request object.
     * @param {Object} res - The response object.
     */
    app.get("/", (req, res) => {
        // Send the index.html file as a response when the root URL is accessed
        res.sendFile(path.join(DOCUMENT_ROOT, "index.html"));
    });

    // You could add additional route handlers here if needed (e.g., for error pages, redirects, etc.)
};

module.exports = { serveStaticFiles }; // Export the function for use in other modules
