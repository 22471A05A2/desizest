$(document).ready(function() {
    $('.form-signin').submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting

        var email = $('.login-input').val(); // Get the email value
        var password = $('.login-input-pass').val(); // Get the password value

        // Simulate a successful login if email and password are not empty
        if (email && password) {
            // Simulate a successful login by alerting a success message
            alert('Login successful!');

            // You can redirect the user to a new page or perform other actions here
            // For example, redirect to a different page after a successful login
            // window.location.href = 'dashboard.html';
        } else {
            // Login failed
            alert('Incorrect email or password. Please try again.');
        }
    });
});
