$(document).ready(function(){   

const header = $('.header');
const gnb = $('.gnb');
let header_class = $('.header_open');

   $('.gnb').mouseenter(function(){
      $('.header').addClass('header_open');
   });

   $('.gnb').mouseleave(function(){      
      $('.header').removeClass('header_open');
   });

   // move to business
   $('.move-cate').click(function(e){

      e.preventDefault();

      let tg_y = $('.cate').offset().top;
      $('html, body').animate({
         scrollTop: tg_y
      });
   });

   // modal close
   $('.modal').click(function(){
      $(this).fadeOut();
   })
});
