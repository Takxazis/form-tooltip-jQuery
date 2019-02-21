$(function () {
    //form section
    $('#errorUsername').html('must be 4-18 char').hide();
    $('#errorPassword').html('must be min 8 char').hide();
    $('#errorRetypePassword').html('password does not mutch').hide();
    $('#errorEmail').html('invalid Email').hide();
    //form logic
    $('#username').focusout(function () {
        console.log('USERNAME focusout works');
        checkUsername();
    });
    $('#password').focusout(function () {
        console.log('PASSWORD focusout works');
        checkPassword();
    });
    $('#retypePassword').focusout(function () {
        console.log('RETYPE PASSWORD focusout works');
        checkRetypePassword();
    });
    $('#email').focusout(function () {
        console.log('EMAIL focusout works');
        checkEmail();
    });
    // form functions
    function checkUsername() {
        const usernameLength = $('#username').val().length;
        if (usernameLength < 4 || usernameLength > 18) {
            $('#errorUsername').show();
        } else {
            $('#errorUsername').hide();

            console.log('username bool', errorUsername);
        }
    }
    function checkPassword() {
        const passwordLength = $('#password').val().length;
        if (passwordLength < 8) {
            $('#errorPassword').show();
        } else {
            $('#errorPassword').hide();
        }
    }
    function checkRetypePassword() {
        const pass = $('#password').val();
        const rePass = $('#retypePassword').val();
        if (pass != rePass) {
            $('#errorRetypePassword').show();
        } else {
            $('#errorRetypePassword').hide();
        }
    }
    function checkEmail() {
        const pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if (pattern.test($('#email').val())) {
            $('#errorEmail').hide();
        } else {
            $('#errorEmail').show();
        }
    }
})
