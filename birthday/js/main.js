$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="123" &&  pwd=="123"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			requestFullScreen();
			setTimeout(function(){
				location.href="BirthdayCake.html";
			},2000);
		}
	else{
		alert("Wrong Password");
	}
});

function requestFullScreen(element) {
	var element=document.documentElement;
	var requestMethod = element.requestFullScreen || //W3C
	element.webkitRequestFullScreen || //Chrome等
	element.mozRequestFullScreen || //FireFox
	element.msRequestFullScreen; //IE11
	if (requestMethod) {
		requestMethod.call(element);
	}
	else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
		 wscript.SendKeys("{F11}");
		}
	}
}

$(document).ready(function(){
	if($("body").outerWidth()<=576){
		$(".container li").css("font-size","32px");
	}else{
		$(".container li").css("font-size","40px");
	}
	$("#title1").fadeIn(5000)
	setTimeout(function(){
		if($("body").outerWidth()<=576){
			$("#title2").show().animate({fontSize:'20px'},3000);
		}else{
			$("#title2").show().animate({fontSize:'28px'},3000);
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
		$(".container li").css("font-size","32px");
		$(".container span").css("font-size","20px");
	}else{
		$(".container li").css("font-size","40px");
		$(".container span").css("font-size","28px");
	}
});