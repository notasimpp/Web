function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    if (username === 'grishma' && password === '0918') {
        // Redirect to index.html upon successful login
        window.location.href = 'home.html';
        return false; // Prevent form submission
    } else {
        // Invalid credentials, show error message
        errorElement.textContent = 'Invalid username or password.';
        return false;
    }
}
