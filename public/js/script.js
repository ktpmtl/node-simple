const passwordField = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

togglePasswordButton.addEventListener('click', function () {
    // Toggle the type attribute
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the button text/icon (optional)
    this.textContent = type === 'password' ? '👁' : '🙈';
});

function testSubmitbutton() {
    var test1, test2, test3 = false;
    test1 = $("#username").val() == null || $("#username").val() == '';
    test2 = $("#password").val() == null || $("#password").val() == '';
    test3 = $("#role").val() == null || $("#role").val() == '';

    var testCase = test1 || test2 || test3;
    if (testCase) {
        $("#loginbtn").attr('disabled', true);
    } else {
        $("#loginbtn").attr('disabled', false);
    }
    return testCase;
}

$(document).ready(function() {
    $("#loginform").submit(function(event) {
        event.preventDefault();

        $("#username_error").attr('hidden', true);
        $("#password_error").attr('hidden', true);
        $("#password_error").attr('hidden', true);

        if (testSubmitbutton()) {
            // not pass
            test1 = $("#username").val() == null || $("#username").val() == '';
            if (test1) $("#username_error").attr('hidden', false);
            test2 = $("#password").val() == null || $("#password").val() == '';
            if (test2) $("#password_error").attr('hidden', false);
            test3 = $("#role").val() == null || $("#role").val() == '';
            if (test3) $("#role_error").attr('hidden', false);
        } else {
            // PASS TO API
        }

    });
});