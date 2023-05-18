import $ from 'jquery';

$('.zic__loadmore').on('click',function(){
    $(this).next().slideToggle();
    $(this).toggleClass('clicked');
    if($(this).hasClass('clicked')){
        $(this).find('.zic__loadmore--moretextfoot').text('Zwiń');
    }else{
        $(this).find('.zic__loadmore--moretextfoot').text('Rozwiń');
    }
  });


  $('.p__gall--box').each(function(){
        $(this).on('click', function(){
            let thisurl = $(this).find('img').attr('src');
            $(this).parent().next().find('img').attr('src',thisurl);
            // $('.p__gall--single img').attr('src',thisurl);
        });
  });
  

$('.p__info--szcz').on('click', function(){
    $(this).toggleClass('active'); 
    $('.p__info--tab').toggleClass('active');
});
// $('.p__info--tab').on('click', function(){
// });

$('.zic__more').on('click', function(){
    $(this).hide();
    $('.zic__col--item.hide').each(function(){
        $(this).slideDown();
    });

});
$('.p__info--tab').each(function(){
    $(this).on('click', function(){
        // let next_el = $(this).closest("#zic");
        $('.ptab.activetab').removeClass("activetab");
        $('html, body').animate({
            scrollTop: $(this).parent().prev().offset().top-90
       }, 500, 'linear');
       console.log($(this).parent().prev().offset());
    
    });
});

$('.p__info--tab').on('click', function(){
    // let next_el = $(this).closest("#zic");
//     $('html, body').animate({
//         scrollTop: $(this).parent().offset().top - 150
//    }, 500, 'linear');


    if ($(this).hasClass('activetab')){
        
        $('.p__info--tab').removeClass('activetab');
        $('.ptab').removeClass('activetab');
        $(this).parent().removeClass('active_row');

    }else{

        let this__text = $(this).text();
        $('.p__info--szcz .szcz_text').text(this__text);
        $('.p__info--tab').removeClass('active');
    
        let thisdata = $(this).data('name');
    
        $('.p__info--tabs').removeClass('active_row');
        $(this).parent().addClass('active_row');
    
        $('.p__info--tab').removeClass('activetab');
        $(this).addClass('activetab');
        let content_index = $(this).closest('.p').data('index');
        $('.ptab_'+content_index).each(function(){
            let ptabdata = $(this).data('name');
            if (thisdata == ptabdata){
                $('.ptab').removeClass('activetab');
                $(this).addClass('activetab');
                let close_p = $(this).closest('.p').data('index');
                
                slick_tab_more('#p'+close_p+' .ptab__tab.ptab__colmore.ptab__'+ptabdata);
                slick_tab_two('#p'+close_p+' .ptab__tab.ptab__col2.ptab__'+ptabdata);
                doLightBox();
    
                
            }
        });

    }
});

function slick_tab_more(y){
    
    

    $(y).slick({
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 6000,
        slidesToScroll: 1,
        slidesToShow:3,
        arrows: true,
        swipeToSlide: false,
        focusOnSelect: false,
        touchThreshold:100,
        variableWidth: true,
        prevArrow: "<div class='slick-prev pull-left'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
        nextArrow: "<div class='slick-next pull-right'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
        responsive: [
            {
                breakpoint:1220,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },{
                breakpoint:960,
                settings: "unslick",
            }
        ]
    });
    $(y +' .slick-prev').trigger('click');
    console.log("momomomo");
}


function slick_tab_two(x){
    if ( $(x).children().length < 2 ){
        $(x).slick({
            dots: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            slidesToScroll: 1,
            slidesToShow:1,
            arrows: true,
            swipeToSlide: true,
            variableWidth: true,
            prevArrow: "<div class='slick-prev pull-left'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
            nextArrow: "<div class='slick-next pull-right'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
            responsive: [
                {
                    breakpoint:960,
                    settings: "unslick",
                }
            ]
        }); 
        $(x +' .slick-prev').trigger('click');
        console.log("momomomo1");
    }else{
        
        $(x).slick({
            dots: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            slidesToScroll: 2,
            slidesToShow:2,
            arrows: true,
            swipeToSlide: true,
            variableWidth: true,
            prevArrow: "<div class='slick-prev pull-left'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
            nextArrow: "<div class='slick-next pull-right'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
            responsive: [
                {
                    breakpoint:1220,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },{
                    breakpoint:960,
                    settings: "unslick",
                }
            ]
        }); 
        $(x +' .slick-prev').trigger('click');
        console.log("momomomo2");
    }
}