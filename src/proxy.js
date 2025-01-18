const { createProxyMiddleware } = require("http-proxy-middleware");
const { API_TARGET } = require("./config");
const https = require("https");
const http = require("http");

const determineProtocolAgent = (target) => {
    // Check if the target URL starts with 'https', and return the respective agent
    return target.startsWith("https")
        ? new https.Agent({ rejectUnauthorized: false }) // Disables SSL verification for self-signed certificates or invalid SSL
        : new http.Agent(); // For non-HTTPS targets
};

/**
 * Sets up the proxy middleware to forward API requests to the target server.
 * This is used to handle /api routes and forward them to the specified backend server.
 *
 * @param {Express} app - The Express app instance where the proxy middleware will be applied.
 */
const setupProxy = (app) => {
    // Create a proxy middleware to handle API requests
    const apiProxy = createProxyMiddleware("/api", {
        target: API_TARGET, // The target server URL (could be HTTP or HTTPS)
        changeOrigin: true, // Changes the origin of the request to match the target
        secure: false, // Disable SSL validation (useful for self-signed certificates or insecure SSL setups)
        agent: determineProtocolAgent(API_TARGET), // Dynamically handle the protocol (HTTP/HTTPS)
        logLevel: "debug", // Enable detailed logging to help debug proxy issues (can be changed to 'info' for less verbosity)

        /**
         * Custom error handler for the proxy.
         * In case the proxy encounters an error (e.g., target server down), it logs the error and sends a response.
         *
         * @param {Error} err - The error object
         * @param {Object} req - The incoming request object
         * @param {Object} res - The response object
         */
        onError: (err, req, res) => {
            console.error("Proxy Error:", err.message); // Log the error message to the console
            // Respond with a 500 status code and an error message
            res.status(500).send("Proxy encountered an error.");
        },
    });

    // Apply the proxy middleware for all requests to /api (i.e., forward them to the target server)
    app.use("/api", apiProxy); // Every /api request is proxied to the target
};

module.exports = { setupProxy }; // Export the setupProxy function so it can be used in other parts of the app
