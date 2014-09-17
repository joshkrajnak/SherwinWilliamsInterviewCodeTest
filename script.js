$(function() {
    function close_accordion() {
    	// remove the 'active' class from the old div and hide the content
        $('.accordion .accordion-title').removeClass('active');
        $('.accordion .accordion-content').slideUp(100).removeClass('open');             
        // to-do logic for (+) sign on each acordion-title
    }
 
    $('.accordion-title').click(function(e) {
    	// preventing default actions to occur with hrefs
        e.preventDefault();  
                
 		// if the div we clicked has the active class, remove it and close it
        if(!$(this).is('.active')) {
        	// remove the 'active' tab from the current div and close it
            close_accordion();
            // add the 'active' class to div we clicked
            $(this).addClass('active');
            // show the content, with style!
            $('.accordion ' + $(this).attr('href')).slideDown(100).addClass('open');
                     	           
			// to-do logic for (-) sign on $this via .toggleClass
        }
    });
    
    // default accordion-1 to be open
    $('.accordion #accordion-1').show().addClass('open'); 
});
