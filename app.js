// Handle signup form submission
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        
        // Save username in localStorage
        localStorage.setItem('username', username);
        
        // Redirect to home page
        window.location.href = 'home.html';
    });
}

// On home page load, display the username
window.addEventListener('load', function() {
    const username = localStorage.getItem('username');
    if (username) {
        const welcomeMsg = document.getElementById('welcomeMsg');
        const profileName = document.getElementById('profileName');
        if (welcomeMsg) {
            welcomeMsg.textContent = `Hi, ${username}!`;
        }
        if (profileName) {
            profileName.textContent = username;
        }
    }
});

// Handle login form submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // You can add validation or API calls here if necessary

        // Redirect to home page
        window.location.href = 'home.html';
    });
}
