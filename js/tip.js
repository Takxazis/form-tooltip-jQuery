$(function () {
    $('#username').hover(function () {
        $('#tipUsername').css('display', 'block');
    }, function () {
        $('#tipUsername').css('display', 'none');
    })
    $(document).mousemove(function (event) {
        var postionX = event.pageX + 5;
        var postionY = event.pageY + 5;
        $('#tipUsername').css('left', postionX + 'px').css('top', postionY + 'px');
    })
    $('#password').hover(function () {
        $('#tipPassword').css('display', 'block');
    }, function () {
        $('#tipPassword').css('display', 'none');
    })
    $(document).mousemove(function (event) {
        var postionX = event.pageX + 5;
        var postionY = event.pageY + 5;
        $('#tipPassword').css('left', postionX + 'px').css('top', postionY + 'px');
    })
    $('#retypePassword').hover(function () {
        $('#tipRetypePassword').css('display', 'block');
    }, function () {
        $('#tipRetypePassword').css('display', 'none');
    })
    $(document).mousemove(function (event) {
        var postionX = event.pageX + 5;
        var postionY = event.pageY + 5;
        $('#tipRetypePassword').css('left', postionX + 'px').css('top', postionY + 'px');
    })
    $('#email').hover(function () {
        $('#tipEmail').css('display', 'block');
    }, function () {
        $('#tipEmail').css('display', 'none');
    })
    $(document).mousemove(function (event) {
        var postionX = event.pageX + 5;
        var postionY = event.pageY + 5;
        $('#tipEmail').css('left', postionX + 'px').css('top', postionY + 'px');
    })
})