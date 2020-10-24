$(document).ready(function(){
	$(".suprise").delay(1500).fadeIn(3500);
});

$(document).bind("mobileinit", function()   
{   
   if (navigator.userAgent.indexOf("Android") != -1)   
   {   
     $.mobile.defaultPageTransition = 'none';   
     $.mobile.defaultDialogTransition = 'none';   
   }   
});

$('.suprise').click(function () {
	location.href = "BirthdayCake.html";
});