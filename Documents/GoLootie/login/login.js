// Assuming you have a backend API to handle user authentication and product uploading

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Here, you would make an AJAX request to your backend API to authenticate the user
    // If the login is successful, you can redirect the user to the product upload page
    window.location.href = "file:///C:/Users/Jaganathan%20V/Documents/GoLootie/login/Product/product.html";

});

// Product upload form submission
document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const offer = document.getElementById('offer').value;
    const image = document.getElementById('image').value; // This will be a file upload, handle it accordingly
    const affiliateURL = document.getElementById('affiliateURL').value;
    // Here, you would make an AJAX request to your backend API to save the product details
    // Don't forget to include the user authentication token to ensure it's accessible only to you
});
