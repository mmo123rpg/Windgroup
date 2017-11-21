jQuery(document).ready(function() {

    $('select').change(function() {
 		if ($(this).children('option:first-child').is(':selected')) {
  			 $(this).addClass('placeholder');
		} 
		else
		{
  			$(this).removeClass('placeholder');
 		}
 	});
 	


    var owl = $("#owl-demo");
 
      owl.owlCarousel({
          autoPlay: 1000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1600,3],
          itemsDesktopSmall : [1170,2],
          itemsTablet: [815,1]
      });

});	
    $.fn.modal.prototype.constructor.Constructor.DEFAULTS.backdrop = 'static';