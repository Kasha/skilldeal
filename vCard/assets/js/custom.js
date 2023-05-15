// Custom jQuery Scripts

$(function() {
		   
// ########## INITIATE LIGHTBOX ########## //
	
	$('a[rel=lightbox]').lightBox();



// ########## SOCIAL MEDIA FADE IN AND FADE OUT ########## //                                        
	
	// reduce opacity to 60%
	$('#social li').fadeTo('fast',0.6)
	
	// on mouse over increase opacity to 100%
	$('#social li').hover(function () {
		$(this).stop().fadeTo('slow',1.0)
		
	// on mouse out reduce back to opacity of 60%	
	}, function() {
		$(this).stop().fadeTo('slow',0.6)
	});



// ########## DOWNLOAD VCARD FADE IN AND FADE OUT ########## //                                        
	
	// reduce opacity to 60%
	$('.download').fadeTo('fast',0.6)
	
	// on mouse over increase opacity to 100%
	$('.download').hover(function () {
		$(this).stop().fadeTo('slow',1.0)
		
	// on mouse out reduce back to opacity of 60%	
	}, function() {
		$(this).stop().fadeTo('slow',0.6)
	});



// ########## CONTENT FADE IN AND FADE OUT ########## //
	
	// When a tab is clicked hide all elements with the class 'content' 
	$("#nav li a").click(function () {   
		$(".content").fadeOut('slow');   
		
		// Now figure out what the 'href' attribute value is and find the element with that id.  	
		// Then show it.   
		var content_show = $(this).attr("href");   
		$(content_show).fadeIn('slow');
		
		// do not perform default action. i.e. do not append #content_id to URL
		return false;         
	});
	
	
	
// ########## NAVIGATION FADE IN AND FADE OUT ########## //
	
	// set opacity to nil on page load
	$("#nav span").css("opacity","0");
	
	// on mouse over animate opacity to 100%
	$("#nav span").hover(function () {
		$(this).stop().animate({
			opacity: 1
		}, 'slow');
	},
	
	// on mouse out animate opacity to 0%
	function () {
		$(this).stop().animate({
			opacity: 0
		}, 'slow');
	});



// ########## USING FORM VALUES AS LABELS AND HIDE ON FOCUS ########## //
	
	// on focus remove default value
	$('input[type="text"]').focus(function() {
		if (this.value == this.defaultValue){ 
			this.value = '';
		}
		
		// if new value input then select
		if(this.value != this.defaultValue){
			this.select();
		}
	});
	
	// on blur if default value hasn't changed do nothing, if has changed keep new value
	$('input[type="text"]').blur(function() {
		if ($.trim(this.value) == ''){
			this.value = (this.defaultValue ? this.defaultValue : '');
		}
	});

});
