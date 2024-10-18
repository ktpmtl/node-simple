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

function clearform() {
    $("#role").val("");
    $("#username").val("");
    $("#password").val("");
    testSubmitbutton();
}

$(document).ready(function() {
    $("#loginform").submit(function(event) {
        event.preventDefault();

        $("#username_error").attr('hidden', true);
        $("#password_error").attr('hidden', true);
        $("#password_error").attr('hidden', true);
        $("#form_error").attr('hidden', true);

        if (testSubmitbutton()) {
            // not pass
            test1 = $("#username").val() == null || $("#username").val() == '';
            if (test1) $("#username_error").attr('hidden', false);
            test2 = $("#password").val() == null || $("#password").val() == '';
            if (test2) $("#password_error").attr('hidden', false);
            test3 = $("#role").val() == null || $("#role").val() == '';
            if (test3) $("#role_error").attr('hidden', false);
        } else {

            var username = $("#username").val();
            var password = $("#password").val();

            fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Application-Key': 'TU5e07d2b409ff300edbd3b062cb5410323cb896225e95453b0285c1b36df793e4474e372e53bb5a478663627676e60955',
                },
                body: JSON.stringify({
                  UserName: username,
                  PassWord: password
                })
              })
                .then(response => {
                  return response.json();
                }).then(json => {
                    if (!json.status) {
                        var errormsg = json.message;
                        $("#form_error").text(errormsg);
                        $("#form_error").attr('hidden', false);
                        return;
                    }

                    $("#nameresult").text("ชื่อ: " + json.displayname_th);
                    clearform();
                });
        }

    });
});