


$(function () {
    
    $('#errorUsername').html('must be 4-18 char').hide();
    $('#errorPassword').html('must be min 8 char').hide();
    $('#errorRetypePassword').html('password does not mutch').hide();
    $('#errorEmail').html('invalid Email').hide();
    

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
    // checkEmail();           
});

function checkUsername(){
    let usernameLength = $('#username').val().length;
    if (usernameLength < 4 || usernameLength > 18){
        $('#errorUsername').show();
    }else{
        $('#errorUsername').hide();
    }
}

function checkPassword(){
    let passwordLength = $('#password').val().length;
    if (passwordLength < 8){
        $('#errorPassword').show();
    }else{
        $('#errorPassword').hide();
    }
}

function checkRetypePassword(){  
    let pass = $('#password').val();
    let rePass = $('#retypePassword').val();
    if ( pass != rePass){
        $('#errorRetypePassword').show();
    }else{
        $('#errorRetypePassword').hide();
    }
}

function checkEmail(){

}

})
