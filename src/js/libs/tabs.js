import $ from 'jquery';

$('.tabsline').on('click', function(){
    $('.tabs__top--item').addClass('activeshow');
  
  });

$('.tabs__top--item').each(function(){
    $(this).on('click tap', function(){
        
        $('.tabs__top--item').removeClass('activeshow');
        $('.tabs__top--item').removeClass('active');
        $(this).addClass('active');
        $(this).addClass('activeshow');
        var t = $(this).data('ide');
       
        $('.tabs__bottom--items').each(function(){
            var t2 = $(this).data('ide');
            
            if (t == t2){
                
                $('.tabs__bottom--items').removeClass('active');
                $(this).addClass('active');
                if ( t2 == "id_2"){
                    $('.tabs__bottom--items.tabs__slick-id2').slick({
                        dots: false,
                        infinite: true,
                        autoplay: false,
                        autoplaySpeed: 6000,
                        slidesToScroll: 1,
                        slidesToShow:4,
                        centerMode: true,
                        arrows: false,
                        prevArrow: "<div class='slick-prev pull-left'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
                        nextArrow: "<div class='slick-next pull-right'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
                        swipeToSlide: true,
                        responsive: [{
                                breakpoint:420,
                                settings: {
                                slidesToShow:2,
                                centerMode: false,
                                arrows: true,
                                slidesToScroll: 1,
                                centerMode: false,
                                }
                            }
                            
                        ]
                    });
                }
            }
            
        });

       
        
    });
});