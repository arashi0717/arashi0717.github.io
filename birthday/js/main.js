$(document).ready(function(){
	if($("body").outerWidth()<=576){
		$("#title1 .col").css({
			"font-size": "32px",
			"padding":"0px"
		});
	}else{
		$("#title1 .col").css("font-size", "40px");
	}
	$("#title1").fadeIn(5000)
	// $("#title1").show();
	// $(".wodry").wodry({
	// 	animation: 'rotateY',
	// 	delay:1000,
	// 	animationDuration:500
	// });
	setTimeout(function(){
		if($("body").outerWidth()<=576){
			$("#title2").show().animate({fontSize:'15px'},3000);
		}else{
			$("#title2").show().animate({fontSize:'20px'},3000);
		}
		setTimeout(function(){
			$("#fairy1").removeAttr("hidden");
			$("#fairy2").removeAttr("hidden");
			$("#fairy3").removeAttr("hidden");
			$("#fairy4").removeAttr("hidden");
		},3500)
	},5500);
});

$(window).resize(function(){
	if($("body").outerWidth()<=576){
		$("#title1 .col").css("font-size", "32px");
		$("#title2").css("font-size","15px");
	}else{
		$("#title1 .col").css("font-size", "40px");
		$("#title2").css("font-size", "20px");
	}
});

$('#fairy1').click(function () {
	setTimeout(function () {
		location.href = "fairy1.html";
	}, 500);
});

$('#fairy2').click(function () {
	setTimeout(function () {
		location.href = "fairy2.html";
	}, 500);
});

$('#fairy3').click(function () {
	setTimeout(function () {
		location.href = "fairy3.html";
	}, 500);
});