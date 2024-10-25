document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation (for demonstration purposes)
  if (username === 'user' && password === 'pass') {
      alert('Login successful!');
      // Redirect or perform further actions here
      // window.location.href = 'dashboard.html'; // Example redirect
  } else {
      document.getElementById('error-message').innerText = 'Invalid username or password.';
  }
  
});