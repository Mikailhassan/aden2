document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('username').value; // Adjusted to use 'username'
        const password = document.getElementById('password').value;
  
        fetch('http://localhost:3000/users')
          .then(response => response.json())
          .then(users => {
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
              alert('Login successful!');
              window.location.href = 'index.html';  
            } else {
              alert('Invalid email or password.');
            }
          });
      });
    }
  
    if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value; // Adjusted to use 'email'
        const password = document.getElementById('password').value;
  
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
          alert('Signup successful! Please login.');
          // Optionally show/hide modals
          $('#signupModal').modal('hide');
          $('#loginModal').modal('show');
        });
      });
    }
  });
  