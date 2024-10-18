const passwordField = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

togglePasswordButton.addEventListener('click', function () {
    // Toggle the type attribute
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the button text/icon (optional)
    this.textContent = type === 'password' ? '👁' : '🙈';
});
