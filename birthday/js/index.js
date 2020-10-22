function changeFrameSize(){
	//设置iframe的宽高
	var ifm = document.getElementById("iframePage");
	ifm.height = document.documentElement.clientHeight;
	ifm.width = document.documentElement.clientWidth;
	//去掉空白处
	$(".container-fluid").css({"margin":"0","padding":"0"});
}

window.onresize = function() {
	changeFrameSize();
}

 document.getElementById("iframePage").onload = changeFrameSize();
