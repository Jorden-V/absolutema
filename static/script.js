$( document ).ready(function(){
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('#testimonial-carousel').owlCarousel({
    autoplay: true,
    dots: false,
    nav: true,
    loop:true,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
})
  