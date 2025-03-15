function generateToken(username) {
    const payload = { username, exp: Date.now() + 3600000 }; // Expires in 1 hour
    return btoa(JSON.stringify(payload));  // Base64 encode payload
}

function decodeToken(token) {
    try {
        return JSON.parse(atob(token));  // Decode Base64
    } catch (e) {
        return null;
    }
}

function isAuthenticated() {
    const token = localStorage.getItem("token");
    if (!token) return false;

    const decoded = decodeToken(token);
    return decoded && decoded.exp > Date.now();  // Check expiration
}
