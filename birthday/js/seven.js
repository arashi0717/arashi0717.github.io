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

//Loading页面
document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		loadingFade();
	}
}

function loadingFade() {
	var opacity = 1;
	//var loadingPage=document.getElementById('loading');
	var loadingBackground = document.getElementById('loading_bg');
	var time = setInterval(function () {
		if (opacity <= 0) {
			clearInterval(time);
			$('#loading').remove();
		}

		loadingBackground.style.opacity = opacity;
		opacity -= 0.4;
	}, 100);
}