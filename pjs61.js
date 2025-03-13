// Example of handling the form submission (You can extend it for more functionality like email sending)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting me, ' + name + '! I will get back to you soon.');
        // Here you can add code to send the form data to your server
    } else {
        alert('Please fill in all fields!');
    }
});
