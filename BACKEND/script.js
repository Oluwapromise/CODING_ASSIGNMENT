// Store users in localStorage
function registerUser() {
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    const hashedPassword = btoa(password);  // Simulating password_hash
    localStorage.setItem(username, hashedPassword);
    alert("User registered successfully!");
}

// Login function
function loginUser() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === btoa(password)) {
        const token = generateToken(username);
        localStorage.setItem("token", token);
        alert("Login successful!");
        window.location.href = "dashboard.html";  // Redirect to dashboard
    } else {
        alert("Invalid username or password!");
    }
}

// Logout function
function logout() {
    localStorage.removeItem("token");
    window.location.href = "index.html";  // Redirect to login
}
