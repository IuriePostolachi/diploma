	jQuery(document).ready(function() {
	    jQuery(".scrollto").click(function() {
	        elementClick = jQuery(this).attr("href")
	        destination = jQuery(elementClick).offset().top - 40;
	        jQuery("html:not(:animated),body:not(:animated)").animate({
	            scrollTop: destination
	        }, 1100);
	        return false;
	    });
	});