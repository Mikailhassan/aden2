document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
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
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
  
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
        $('#signupModal').modal('hide');
        $('#loginModal').modal('show');
      });
    });
  });
  