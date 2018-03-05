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

//function to style vimeo videos when they are done loading, based on https://player.vimeo.com/static/internal/playground.js
function vimeoReady(){
    //grab all vimeo video players
    var vimeoPlayers = $('iframe'), player;
	
	//once we receive the 'ready' message for a player, style it
	for (var i = 0; i < vimeoPlayers.length; i++) {
        player = vimeoPlayers[i];
        $(player).on('ready', ready());
    }

    function ready() {
		console.log('vimeo ready');
		styles();
    }
}