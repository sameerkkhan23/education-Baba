function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert('Registration successful!');
        // Here you can add code to handle the registration process
    } else {
        alert('Please fill in all fields.');
    }
});
