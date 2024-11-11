document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Logged in successfully!');
});

// Simple form validation for register
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration successful! Please login.');
});
