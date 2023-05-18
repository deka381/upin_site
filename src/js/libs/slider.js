import $ from 'jquery';

$('.jd__row').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: false,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint:1220,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 2
            }
        },{
            breakpoint:1026,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 2
            }
        },{
            breakpoint:726,
            settings: {
            slidesToShow: 2,
            // centerMode:true,
            // centerPadding: '10%',
            slidesToScroll: 2
            }
        },{
            breakpoint:600,
            settings: {
            slidesToShow:1,
            centerMode:true,
            // centerPadding: '10%',
            slidesToScroll:1
            }
        },
    ]
}); 

$('.opinie__row').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    prevArrow: "<div class='slick-prev pull-left'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    nextArrow: "<div class='slick-next pull-right'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    swipeToSlide: true,
    responsive: [
        {
            breakpoint:1100,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },{
            breakpoint:600,
            settings: {
            slidesToShow:1,
            slidesToScroll: 1
            }
        }
    ]
}); 

$('.marki__row1').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToScroll: 1,
    slidesToShow: 6,
    arrows: false,
    prevArrow: "<div class='slick-prev pull-left'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    nextArrow: "<div class='slick-next pull-right'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    swipeToSlide: true,
    responsive: [
        {
            breakpoint:1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 2
            }
        },{
            breakpoint:1100,
            settings: {
            slidesToShow:4,
            slidesToScroll: 2
            }
        },{
            breakpoint:820,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },{
            breakpoint:600,
            settings: {
            slidesToShow:2,
            slidesToScroll: 1
            }
        },{
            breakpoint:420,
            settings: {
            slidesToShow:1,
            slidesToScroll: 1
            }
        }
        
    ]
});


$('.gall__slidertop').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gall__sliderbot',
    adaptiveHeight: true
  });
  $('.gall__sliderbot').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    asNavFor: '.gall__slidertop',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: "<div class='slick-prev pull-left'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    nextArrow: "<div class='slick-next pull-right'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    swipeToSlide: true,
    responsive: [
        {
            breakpoint:820,
            settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
            }
        },
        {
            breakpoint:600,
            settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            arrows:false
            }
        }
    ]
  });
  $('.gall__sliderbot .slick-next').trigger('click');

  $('.prods__wrapper').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 6000,
    slidesToScroll: 1,
    slidesToShow:4,
    arrows: false,
    prevArrow: "<div class='slick-prev pull-left'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    nextArrow: "<div class='slick-next pull-right'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    swipeToSlide: true,
    responsive: [{
            breakpoint:1100,
            settings: {
            slidesToShow:3,
            slidesToScroll: 2
            }
        },{
            breakpoint:720,
            settings: {
            slidesToShow:2,
            slidesToScroll: 1
            }
        },{
            breakpoint:420,
            settings: {
            slidesToShow:1,
            slidesToScroll: 1
            }
        }
        
    ]
});
$('.real__row').slick({
    dots: false,
    infinite: false,
    autoplay: false, 
    autoplaySpeed: 6000,
    arrows: true,
    swipeToSlide: true,
    slidesToShow:2.5,
    centerMode: false,
    // centerPadding: '30%',
    prevArrow: "<div class='slick-prev pull-left'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    nextArrow: "<div class='slick-next pull-right'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    responsive: [
        {
          breakpoint:1200,
          settings: {
            // centerPadding: '10%',
          }
        }, 
        {
          breakpoint:720,
          settings: {
            slidesToShow:1,
            centerPadding: '5%',
          }
        }
      ]  
}); 

// $('.real__row .slick-next').trigger('click');
$('.real__row ').on('afterChange', function(event, slick, currentSlide, nextSlide){
    let previousSlideIndex = currentSlide - 1;  
    $('.real__row .slick-slide').removeClass('prev');
    $('.real__row .slick-slide').each(function(){
        if ( $(this).data('slick-index') == previousSlideIndex ){
            $(this).addClass("prev");
        }
    });
  });

$('.tabs__bottom--items.tabs__slick-id1').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 6000,
    slidesToScroll: 1,
    slidesToShow:13,
    centerMode: true,
    arrows: false,
    prevArrow: "<div class='slick-prev pull-left'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    nextArrow: "<div class='slick-next pull-right'><img src='/wp-content/themes/upin/assets/gfx/slider/slide_arr.svg' alt='arrow' /></div>",
    swipeToSlide: true,
    responsive: [{
        breakpoint:1300,
        settings: {
            slidesToShow:8,
            centerMode: false,
            arrows: true,
            slidesToScroll: 2
        }
    },{
        breakpoint:980,
        settings: {
            slidesToShow:6,
            centerMode: false,
            arrows: true,
            slidesToScroll: 1
        }
    },{
        breakpoint:720,
        settings: {
            slidesToShow:4,
            arrows: true,
            centerMode: false,
            slidesToScroll: 1
        }
    }
    ,{
        breakpoint:600,
        settings: {
            slidesToShow:3,
            centerMode: false,
            arrows: true,
            slidesToScroll: 1
        }
    }
        ,{
            breakpoint:420,
            settings: {
                slidesToShow:2,
                arrows: true,
            centerMode: false,
            slidesToScroll: 1
            }
        }
        
    ]
});

