$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="小七七" &&  pwd=="1108"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			requestFullScreen();
			setTimeout(function(){
				location.href="main.html";
			},2000);
		}
	else{
		alert("姓名或密码错了哦~");
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
		$("#title .col").css({
			"font-size": "32px",
			"padding":"0px"
		});
	}else{
		$("#title .col").css("font-size", "40px");
	}
	$("#title").fadeIn(2000);
	setTimeout(function(){
		$('form').fadeIn(1000);
	},2500);
});


$(window).resize(function(){
	if($("body").outerWidth()<=576){
		$("#title .col").css("font-size", "32px");
	}else{
		$("#title .col").css("font-size", "40px");
	}
});