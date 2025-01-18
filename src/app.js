const express = require("express"); // Importing Express.js for setting up the server
const cors = require("cors"); // Importing CORS middleware to handle cross-origin requests
const { setupProxy } = require("./proxy"); // Importing proxy setup function to forward API requests
const { serveStaticFiles } = require("./staticHandler"); // Importing static file handler to serve frontend assets
const { PORT } = require("./config"); // Importing the port number from the configuration file

const app = express(); // Creating an Express application instance

// Enable CORS to allow cross-origin resource sharing
app.use(cors());

// Setup proxy to forward API requests to the target server
setupProxy(app);

// Serve static files from the 'public' folder (or whichever directory is configured)
serveStaticFiles(app);

// Start the server on the specified port and log a message when it’s ready
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
