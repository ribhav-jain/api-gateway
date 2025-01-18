# API Gateway

A simple proxy server built with Node.js and Express to forward API requests to a target server while also serving static files. This project acts as a gateway between a client and a backend API, allowing you to manage cross-origin requests, proxy calls, and more.

---

## Features

- **Proxy API Requests:** Forward API requests to a configurable target server (supports both HTTP and HTTPS).
- **Serve Static Files:** Serve static files from a configurable directory (e.g., frontend files).
- **CORS Support:** Cross-Origin Resource Sharing (CORS) is enabled to handle cross-origin requests.
- **Secure and Non-Secure Support:** Proxy both secure (HTTPS) and non-secure (HTTP) API requests.
- **Error Handling:** Graceful error handling for any proxy or API-related issues.

---

## Prerequisites

Before running the API Gateway, make sure you have the following installed on your system:

- **Node.js:** v14 or later  
  [Download Node.js](https://nodejs.org/)
- **npm:** v6 or later  
  npm is installed automatically with Node.js.

---

## Setup

Follow these steps to set up the project:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd api-gateway
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure the Environment**
   Create a `.env` file in the root of your project (if not already present) to define the target API URL for proxying.

   ```bash
    # .env
    TARGET_URL=http://your-api-server-url
   ```

4. **Start app:**

   ```bash
   npm start
   ```

## How It Works

### API Proxying

Any request made to `http://localhost:7000/api/*` is forwarded to the backend server defined in the `.env` file. This includes both HTTP and HTTPS requests.

### Static Files

The server serves static files from a configurable directory.

### CORS

CORS is enabled, allowing cross-origin requests from other domains or ports. This is particularly useful for frontend apps running on different servers or ports.

### SSL Support

If the backend target server is HTTPS, the proxy will handle secure requests. The server will disable SSL verification in the case of invalid or self-signed certificates.
