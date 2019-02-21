$(function () {
    $('#showPass').click(function () {
        $('#password').prop('type', 'text');
        $('#retypePassword').prop('type', 'text');
        console.log("password revealed");
        $('#showPass').css('display', 'none');
        $('#hidePass').css('display', 'block');

    })

    $('#hidePass').click(function () {
        $('#password').prop('type', 'password');
        $('#retypePassword').prop('type', 'password');
        console.log("password revealed");
        $('#hidePass').css('display', 'none');
        $('#showPass').css('display', 'block');

    })
})