// Event listener for the form submission
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');
    
    // Form validation when submitting
    loginForm.addEventListener('submit', function (event) {
        // Get the input values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation: Check if the fields are empty
        if (email === "" || password === "") {
            event.preventDefault(); // Prevent form submission
            alert("Please fill out both the email and password fields.");
            return;
        }

        // Check if the email is in the correct format using a regular expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            event.preventDefault(); // Prevent form submission
            alert("Please enter a valid email address.");
            return;
        }

        // If both fields are valid, submit the form (this is just a basic check)
        alert("Login successful!");
    });
});
