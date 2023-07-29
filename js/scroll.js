// scripts.js

// Wait for the DOM to be fully loaded
$(document).ready(function() {
    // Get the total width of all blog cards (slides)
    var totalWidth = 0;
    $('.blog-card').each(function() {
      totalWidth += $(this).outerWidth();
    });
  
    // Set the total width as the width of the slider container
    $('.blog-slider').css('width', totalWidth + 'px');
  });
  