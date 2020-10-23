$(document).ready(function(){
	if($("body").outerWidth()<=576){
		$("#title1 div").css("font-size","25px");
		$(".fairy span").css("font-size","15px");
	}else{
		$("#title1 div").css("font-size","30px");
		$(".fairy span").css("font-size","20px");
	}
	$("#title1").fadeOut(3500);
	setTimeout(function(){
		if($("body").outerWidth()<=576){
			$("#title2").show().animate({fontSize:'20px'},1000);
		}else{
			$("#title2").show().animate({fontSize:'25px'},1000);
		}
		setTimeout(function(){
			$(".fairy").fadeIn(2000);
		},1500)
	},4000);
});

$(window).resize(function(){
	if($("body").outerWidth()<=576){
		$("#title1 div").css("font-size", "20px");
		$("#title2").css("font-size","20px");
		$(".fairy span").css("font-size","15px");
	}else{
		$("#title1 div").css("font-size", "30px");
		$("#title2").css("font-size", "25px");
		$(".fairy span").css("font-size","20px");
	}
});

$('#fairy1').click(function () {
	setTimeout(function () {
		location.href = "fairy.html";
	}, 500);
});

$('#fairy2').click(function () {
	setTimeout(function () {
		location.href = "fairy.html";
	}, 500);
});

$('#fairy4').click(function () {
	setTimeout(function () {
		location.href = "fairy.html";
	}, 500);
});