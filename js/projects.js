//use json to save/fill in information about projects
$(document).ready(function(){
	'use strict';
	
	//style vimeo videos
	vimeoReady();
	
	//styles();
	
	$(window).resize(function(){
		styles();
	});
	
	//grab the article where we will insert data
	var a = $('article.projectData');
	
	//var to save project data
	var p;
	
	//grab json file and run dataEntry function
	$.getJSON('../json/projects.json', dataEntry);
	
	function dataEntry(data){
		//save json data into p
		p = data.p;
		
		//find the p with the coresponding projectName
			for(var j = 0; j < p.length; j++){
				
				//if we find a match:
				if($(a).attr('projectTag') === p[j].projectTag){
					//construct title and subtitle
					var t = '<h1>' + p[j].titleHTML + '</h1><p>' + p[j].subtitle + '</p>';
					
					//add titles before article
					$(a).before(t);
					
					//build the rest of the html elements
					var e = "";
					
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
					$(a).append(e);
					
					//next, add clickout buttons
					//first, grab clickout article
					var c = $('article#clickouts');
					//if project is not last in array, prepend a 'previous' button
					if(j < p.length){
						c.prepend('<a class="button" href="../' + p[j+1].readMore + '">Previous: ' + p[j+1].title + '</a>');
					}
					
					//if project is not first in array, append a 'next' button
					if(j > 0){
						c.append('<a class="button" href="../' + p[j-1].readMore + '">Next: ' + p[j-1].title + '</a>');
					}
				}
			}
		styles();
	}
});