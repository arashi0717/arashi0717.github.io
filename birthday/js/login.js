$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="小七七" &&  pwd=="1108"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			location.href="main.html";
		}
	else{
		alert("姓名或密码错了哦~");
	}
});

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