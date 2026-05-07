// ============================================================
// API CONFIGURATION
// Set BACKEND_URL to your deployed backend URL in production.
// For local dev: http://localhost:8000
// For production: https://your-backend.onrender.com
// ============================================================

const API_BASE = (() => {
    // Auto-detect: if running on localhost, use local backend
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        return "http://localhost:8000";
    }
    // Production: change this to your deployed backend URL
    return "https://your-backend-url.onrender.com";
})();
