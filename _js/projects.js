//if we have a .loading section, disable scrolling
//if($("section#loading").length !== 0){
//		$("body").addClass("loadingOpen");
//}

//use json to save/fill in information about projects
$(document).ready(function(){
	'use strict';
	
	function styles(){
		var heightHeader = $("div#header").outerHeight();
		
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
	
	styles();
	
	$(window).resize(function(){
		styles();
	});
	
	//grab each article.projectData
	var a = $('article.projectData');
	
	//var to save project data
	var p;
	
	//grab json file and run dataEntry function
	$.getJSON('../_json/projects.json', dataEntry);
	
	function dataEntry(data){
		//save json data into p
		p = data.p;
		
		//for each a, find the p with the coresponding projectName
		a.each(function(){
			for(var j = 0; j < p.length; j++){
				//if we find a match:
				if($(this).attr('projectTag') === p[j].projectTag){
					//add title and subtitle before a
					var t = '<h1>' + p[j].title + '</h1><p>' + p[j].subtitle + '</p>';
					$(this).before(t);
					
					//build the rest of the html elements
					var e = "";
					
					//subtitle
					//e = e + '<p>' + p[j].subtitle + '</p>';
					
					//hero img/video
                	e = e + p[j].hero;
					
					//hero img caption
					if (p[j].heroCaption !== "") {
						e = e + '<i class="fa fa-caret-up" aria-hidden="true"></i><p class="caption">' + p[j].heroCaption + '</p>';
					}
					
					//client
					if (p[j].client !== "") {
						e = e + '<h3>Client</h3><p>' + p[j].client + '</p>';
					}
					
					//role
					if (p[j].role !== "") {
						e = e + '<h3>Role</h3><p>' + p[j].role + '</p>';
					}

					//tools
					if (p[j].tools !== "") {
						e = e + '<h3>Tools</h3><p>' + p[j].tools + '</p>';
					}
					
					//status
					if (p[j].status !== "") {
						e = e + '<h3>Status</h3><p>' + p[j].status + '</p>';
					}

					//append it all
					$(this).append(e);
					
					//style new elements
					//styles();
					
					//exit loop
					return false;
				}
			}
		});
		
		//loadingDone();
		styles();
	}
	
//	function loadingDone(){
//		//once loading is done, fade out
//		$("body").removeClass("loadingOpen");
//		$("section#loading").addClass("loadingClose");
//	}
	
//	function styles(){
//		$(".heightWindow").css({
//			"min-height" : ($(window).height() - $("header").height())
//		});
//		$("#content").css({
//			"padding-top" : $("header").height()
//		});
//		$(".aspect16x9").css({
//			"height" : ($(".aspect16x9").width()/16)*9
//		});
//	}
});


//
//
//
//
////Init ScrollMagic
//var controller = new ScrollMagic.Controller();
//////JSON object that corresponds to the info we want
////var p;
//
////array of project article placeholders
//var a = [];
////array of project JSON objects
//var p = [];
//
//function preload() {
//    a = selectAll('.project');
//    loadJSON('/json/projects.json', displayP);
//}
//
//function setup() {
//    console.log('p5 initialized');
//
//    //pre-reveal
//    hashtagHover();
//    linkHover();
//    introPosition();
//
//    //loading pt.3 - reveal
//    TweenLite.to('header', 1, {
//        opacity: 1,
//        ease: Power4.easeOut,
//    });
//
//    TweenLite.to('.year', .5, {
//        opacity: .25,
//        ease: Power4.easeOut,
//        onComplete: revealArticle
//    });
//}
//
//function displayP(data) {
//    p = data.p;
//    for (var i = 0; i < a.length; i++) {
//        for (var j = 0; j < p.length; j++) {
//            if (a[i].attribute('projectTitle') == p[j].title) {
//                //init description
//                var desc = '<p class="hashtag">#PROJECTS</p>';
//                //hero img
//                desc = desc + p[j].hero;
//                //hero img caption
//                if (p[j].heroCaption != "") {
//                    desc = desc + '<p class="caption">' + p[j].heroCaption + '</p>';
//                }
//                //title and subtitle
//                desc = desc + '<h2>' + p[j].title + '</h2>' + '<h3>' + p[j].subtitle + '</h3>';
//
//                //tools
//                if (p[j].tools != "") {
//                    desc = desc + '<p>' + p[j].tools + '</p>';
//                }
//                //client
//                if (p[j].client != "") {
//                    desc = desc + '<p class="projectDesc">Client: ' + p[j].client + '</p>';
//                }
//                //role
//                if (p[j].role != "") {
//                    desc = desc + '<p class="projectDesc">Role: ' + p[j].role + '</p>';
//                }
//                //status
//                if (p[j].status != "") {
//                    desc = desc + '<p class="projectDesc">Status: ' + p[j].status + '</p>';
//                }
//                //tags
//                desc = desc + '<p class="hashtag">' + p[j].tags + '</p>';
//
//                //add it all
//                a[i].html(desc);
//            }
//        }
//    }
//}
//
//$(window).resize(function () {
//    introPosition();
//});