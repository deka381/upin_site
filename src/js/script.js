import "core-js/stable";
import "regenerator-runtime/runtime";
import AOS from 'aos';
import $ from 'jquery';
import 'slick-carousel'; 
import Header from './libs/header';
import './libs/slider';
import './libs/tabs';
import './libs/posty';
import './libs/prod';
import './libs/faq';
$(document).ready(() => {
  console.log('Hello word!');
});

// Your scripts here
$('#header .header').each((i, e) => {
  new Header(e, $(e));
});
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const $headerE = $('#header');
const $headerP = $('.header');
const $headerT = $('.topheader');
// const $btt = $('.backtotop');
$(window).on('scroll', () => {
  let scroll = window.scrollY;
  if (scroll > $headerP.height()) {
    scroll = $headerP.height();
    $headerE.addClass('header__sticky_head');
    // $btt.addClass('header__sticky_head');
    $headerT.addClass('topheader__sticky_tophead');
  } else {
    $headerE.removeClass('header__sticky_head');
    // $btt.removeClass('header__sticky_head');
    $headerT.removeClass('topheader__sticky_tophead');
  }
  // $headerE.css('margin-top', scroll * -1 + 'px');
});
$(window).trigger('scroll');

// $('.backtotop').on('click', function(){

//   $("html, body").animate({scrollTop: 0}, 1000);
// });

if (document.body.classList.contains('page-id-34')){
  
  var wpcf7Elm = document.querySelector( '.sk .wpcf7' );
 
  wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
    $('.sk__popup').addClass('active'); 
    $('.wpcf7 .wpcf7-form > *').hide();
    $('.wpcf7 .wpcf7-response-output').show();

  }, false ); 

}
// if (document.body.classList.contains('home') || document.body.classList.contains('page-id-26')){
  
//     var wpcf7Elm = document.querySelector( '.kzn .wpcf7' );
    
//     wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
//       $('.kzn__popup').addClass('active'); 
//     }, false );

// }
if ($('#kzn').length){
  var wpcf7Elm = document.querySelector( '.kzn .wpcf7' );
    
    wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
      $('.kzn__popup').addClass('active'); 
      $('.wpcf7 .wpcf7-form > *').hide();
      $('.wpcf7 .wpcf7-response-output').show();
    }, false );
}
if (document.body.classList.contains('page-id-217')){
  
  var wpcf7Elm = document.querySelector( '.us .wpcf7' );
 
  wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
    $('.up__popup').addClass('active'); 
    $('.wpcf7 .wpcf7-form > *').hide();
    $('.wpcf7 .wpcf7-response-output').show();
  }, false ); 

}

if (document.body.classList.contains('page-id-219')){
  
  var wpcf7Elm = document.querySelector( '.us .wpcf7' );
 
  wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
    $('.us__popup').addClass('active'); 
    $('.wpcf7 .wpcf7-form > *').hide();
    $('.wpcf7 .wpcf7-response-output').show();
  }, false ); 

}

$('.wpcf7-file').change(function() {
   $(this).addClass('active');
  });
$('.popup__close').on('click tap', function(){
  $('.popup').removeClass('active');
});

$('.hometext__top--more').on('click',function(){
  $('.hometext__bottom').slideToggle();
  $(this).toggleClass('clicked');
  if($(this).hasClass('clicked')){
    $('.moretextfoot').text('Zwiń');
  }else{
    $('.moretextfoot').text('Rozwiń');
  }
});

