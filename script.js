


$(function () {

    //form section

    $('#errorUsername').html('must be 4-18 char').hide();
    $('#errorPassword').html('must be min 8 char').hide();
    $('#errorRetypePassword').html('password does not mutch').hide();
    $('#errorEmail').html('invalid Email').hide();

    $('#divka').click(function () {
        $('#password').prop('type', 'text');
        $('#retypePassword').prop('type', 'text');
        console.log("password revealed");

    })

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


    // tip section

    $('#username').hover(function () {
        $('.tipUsername').css('display', 'block');

    }, function () {
        $('.tipUsername').css('display', 'none');
    })

    $(document).mousemove(function (event) {
        var postionX = event.pageX + 5;
        var postionY = event.pageY + 5;

        $('.tipUsername').css('left', postionX + 'px').css('top', postionY + 'px');
    })
    $('#password').hover(function () {
        $('.tipPassword').css('display', 'block');

    }, function () {
        $('.tipPassword').css('display', 'none');
    })

    $(document).mousemove(function (event) {
        var postionX = event.pageX + 5;
        var postionY = event.pageY + 5;

        $('.tipPassword').css('left', postionX + 'px').css('top', postionY + 'px');
    })


    $('#retypePassword').hover(function () {
        $('.tipRetypePassword').css('display', 'block');

    }, function () {
        $('.tipRetypePassword').css('display', 'none');
    })

    $(document).mousemove(function (event) {
        var postionX = event.pageX + 5;
        var postionY = event.pageY + 5;

        $('.tipRetypePassword').css('left', postionX + 'px').css('top', postionY + 'px');
    })

    $('#email').hover(function () {
        $('.tipEmail').css('display', 'block');

    }, function () {
        $('.tipEmail').css('display', 'none');
    })

    $(document).mousemove(function (event) {
        var postionX = event.pageX + 5;
        var postionY = event.pageY + 5;

        $('.tipEmail').css('left', postionX + 'px').css('top', postionY + 'px');
    })

})
