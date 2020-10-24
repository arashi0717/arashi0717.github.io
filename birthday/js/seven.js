$(document).bind("mobileinit", function () {
	if (navigator.userAgent.indexOf("Android") != -1) {
		$.mobile.defaultPageTransition = 'none';
		$.mobile.defaultDialogTransition = 'none';
	}
});

$('.suprise').click(function () {
	location.href = "BirthdayCake.html";
});

function imgLoad(img, callback) {
	var timer = setInterval(function () {
		if (img.complete) {
			callback(img)
			clearInterval(timer)
		}
	}, 50)
}
imgLoad(sevenImg, function () {
	$('.loading').remove();
	$(".suprise").delay(1500).fadeIn(3500);
});

