$(document).ready(function(){
	
	$('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });
    
    // contact
    $('.header #contact').click(function(){
    	$('body').addClass('modalVisible');
    	
	    $('#modal').fadeIn('fast');
    });
    
     // contact
    $('#closemodal').click(function(){
    	$('body').removeClass('modalVisible');
    	
	    $('#modal').fadeOut();
    });
    
    // check
    if($('.carousel').length != -1) {
	    $('.carousel').carousel({
		    interval : 10000
	    });
    }
}); 