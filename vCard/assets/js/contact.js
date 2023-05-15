// AJAX contact form
$(function(){
	$("#ajax-contact-form").submit(function(){
	
	var str = $(this).serialize();
	
	   $.ajax({
	   type: "POST",
	   url: "php/contact.php",
	   data: str,
	   success: function(msg){
		
	$("#note").ajaxComplete(function(event, request, settings){
	
	if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
	{
	result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
	$("#fields").hide();
	}
	else
	{
	result = msg;
	}
	
	$(this).html(result);
	
	});
	
	}
	
	 });
	
	return false;
	
	});

});
