const role = localStorage.getItem('userRole');
if (role) {
  document.getElementById('welcomeRole').textContent = 'Welcome, ' + role.charAt(0).toUpperCase() + role.slice(1) + '!';
}
