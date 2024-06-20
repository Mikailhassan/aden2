// signup.js

$(document).ready(function() {
    // Handle signup form submission
    $('#signupForm').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Capture input values
      const username = $('#username').val();
      const email = $('#email').val();
      const password = $('#password').val();
  
      // Prepare data as an object
      const userData = {
        username: username,
        email: email,
        password: password
      };
  
      // Perform AJAX signup request
      $.ajax({
        url: 'http://localhost:3000/users', // Replace with your actual endpoint URL
        method: 'POST',
        contentType: 'application/json', // Set content type header
        data: JSON.stringify(userData), // Convert JS object to JSON string
        success: function(response) {
          alert('Signup successful! Please login to continue.');
          // Optionally redirect to login page
          window.location.href = '/login';
        },
        error: function(xhr, status, error) {
          alert('Signup failed! Please try again later.');
        }
      });
    });
  });
  