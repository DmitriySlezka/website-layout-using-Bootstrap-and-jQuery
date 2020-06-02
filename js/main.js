$(document).ready(function(){

   var transportSlider = $('.owl-carousel');

   transportSlider.owlCarousel({
      items: 1,
      dots: false,
      loop: true,
      smartSpeed: 1000,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      freeDrag: false,
   });

   $('#sliderRight').click(function() {
      transportSlider.trigger('next.owl.carousel');
   });

   $('#sliderLeft').click(function() {
      transportSlider.trigger('prev.owl.carousel');
   });

});