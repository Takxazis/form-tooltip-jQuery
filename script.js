
// короч. по дому все норм, находит, вставляет, не могу чек сделать на длину, хоть убей. 
// пробовал всяко, менял местами всё че можно, был на стак оверфлоу, там оказалось также я как замутил... у них работает.
// пробовал через this пофиг как его запрашивал через родителей и классы, айди. добавлял елсы, перехадживал по разному из дефолта в хайд.
// и в див я его оборачивал... 
// внизу пример this
// горит пукан и у тебя глаза горят
// а хочу я, что-бы у меня текстик появлялся рядом с инпутом если длина не подходит


$(function () {
    
    // $('#errorUsername').html('test'); // находит, вставляет куда надо.
    

    $('#username').focusout(function () {
        console.log('focusout works'); // вона працюе
        
        
            var usernameLenght = $('#username').val().lenght;
            
         
            if(usernameLenght < 4 || usernameLenght > 5){   // ВОТ ТУТ ДОЛЖНО РАБОТАТЬ!!!!!!! 
                $('#errorUsername').html('test');
                      
            }
            
        
        
 
 });

//  $('#username').focusout(function () {
//     console.log('focusout works');
    
    
//         var usernameLenght = $('#username').val().lenght;
        
     
//         if($(this).val().lenght < 4 || $(this).val().lenght > 5){
//             $('#errorUsername').html('test');
                  
        
//         }











})