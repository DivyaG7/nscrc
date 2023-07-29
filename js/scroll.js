
// scripts.js

// Wait for the DOM to be fully loaded
$(document).ready(function() {
  // Calculate the total width of the slider content
  var totalWidth = $('.slider-wrapper').width();

  // Set the total width as the width of the slider container
  $('.blog-slider').css('width', totalWidth + 'px');

  // Function to restart the animation when one loop is complete
  function restartAnimation() {
    $('.blog-slider').css('transform', 'translateX(0)');
    $('.blog-slider').animate({ 'transform': 'translateX(-100%)' }, 20000, 'linear', restartAnimation);
  }

  // Start the animation
  restartAnimation();
});

  

  
