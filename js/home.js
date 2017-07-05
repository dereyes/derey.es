//use json to save/fill in information about projects
$(document).ready(function(){
	'use strict';
	
	// init controller
	var controller = new ScrollMagic.Controller();
	// change behaviour of controller to animate scroll instead of jump
//	controller.scrollTo(function (target) {
//		TweenMax.to(window, 0.5, {
//			scrollTo: {y: target}
//		});
//	});
	
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
	$.getJSON('_json/projects.json', dataEntry);
	
	
	function dataEntry(data){
		//save json data into p
		p = data.p;
		
		//for each a, find the p with the coresponding projectName
		a.each(function(){
			for(var j = 0; j < p.length; j++){
				//if we find a match:
				if($(this).attr('projectTag') === p[j].projectTag){
					//build the html elements
					var e = "";
					
					//node
					e = e + '<div class="node"></div>';
					
					//hero preview image
					e = e + '<div class="heroImage" style="background-image: url('../_js/ + p[j].preview + ')"></div>';
					
					//title and subtitle
					e = e + '<h2>' + p[j].title + '</h2><p>' + p[j].subtitle + '</p>';
					
					//read more button
					e = e + '<a class="button" href="../_js/' + p[j].readMore + '">Read More</a>';

					//prepend it all
					$(this).prepend(e);
				}
			}
			console.log('project added');
		});
		
		console.log('all projects added');
		
		//style the new elements
		styles();

		//animate each .tileHome
		var t = $('.tileHome:not(h1)').toArray();

		t.forEach(function (trigger, i) {
			new ScrollMagic.Scene({
					triggerElement: t[i],
					triggerHook: 0.66
				})
				.setTween(t[i], 0.3, {
					opacity: 1
				})
				//.addIndicators({name: "tiles"})
				.addTo(controller);
		});
	}
	
	//sorting
	//grab tiles
	var tiles = $('.tileHome');
	
	//only on load, check to see if we came in with a hash
	if(location.hash !== '') {
		//if so, run sorting()
		sorting(location.hash.substring(1));
	} else {
		sorting("initial");
	}	
	
	//when a header a.sort is clicked, run sorting 
	$("div#header div nav#tabs a").click(function(){
		sorting($(this).attr("sort"));
	});
	
	
	function sorting(filter){
		switch(filter){
			case 'initial':
				//if initial, filter w/ work
				tilesShowHide('work');
				break;
			case 'all':
				//if all, fade, show all, autoscroll
				tilesFadeOut();
				tilesShowAll();
				autoScroll();
				break;
			case 'contact':
				//if contact, autoscroll
				autoScroll();
				break;
			default:
				//otherwise, fade, filter, autoscroll
				tilesFadeOut();
				tilesShowHide(filter);
				autoScroll();
		}
		
		function tilesFadeOut(){
			$("section.sectionTiles").addClass("sorting");
		}
		
		function tilesFadeIn(){
			$("section.sectionTiles").removeClass("sorting");
		}
		
		function tilesShowHide(f){
			tiles.each(function(){
				if($(this).hasClass(f)){
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		}
		
		function tilesShowAll(){
			tiles.each(function(){
				$(this).show();
			});
		}
		
		//the trick: don't give any divs an id matching the filter
		function autoScroll(){
			TweenMax.to(window, 0.66, {
				scrollTo: {y: '#' + filter + 'Anchor'},
				onComplete: tilesFadeIn
			});
		}
	}
	
	//because it doesn't remove with tilesFadeIn()
	//when you reload with a hash for some reason
	$("section.sectionTiles").removeClass("sorting");
});