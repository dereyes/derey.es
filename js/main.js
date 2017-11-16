function styles(){
	var heightHeader = $("header").outerHeight();
		
	$(".heightWindow").css({
		"min-height" : ($(window).innerHeight() - heightHeader)
	});
	$(".heightWindow66").css({
		"height" : (($(window).height()/3)*2)-heightHeader,
		"margin-bottom" : ($(window).height()/3)
	});
	$("#content").css({
		"padding-top" : heightHeader
	});
	$(".aspect16x9").css({
		"height" : ($(".aspect16x9").width()/16)*9
	});
		
	console.log("styles applied");
}