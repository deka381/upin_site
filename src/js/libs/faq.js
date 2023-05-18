import $ from 'jquery';

$('.qa__item').each(function(){
    $(this).on('click', function(){
        
        
        if (!$(this).hasClass('active')){
            $('.qa__item .qa__answ').slideUp();
            $('.qa__item').removeClass('active');

            $(this).find('.qa__answ').slideDown();
            $(this).addClass('active');
        }else{
            $(this).find('.qa__answ').slideUp();
            $(this).removeClass('active');
        }
    });
});