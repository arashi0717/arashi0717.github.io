function changeFrameSize(){
	var ifm = document.getElementById("iframePage");
	ifm.height = document.documentElement.clientHeight;
	ifm.width = $(".container").outerWidth()
}

window.onresize = function() {
	changeFrameSize();
}

 document.getElementById("iframePage").onload = changeFrameSize;
