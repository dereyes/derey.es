//$(document).ready(function(){
//	'use strict';
////	
//	// init controller
//	var controller = new ScrollMagic.Controller();
////	
////	// build scene
////	var scene = new ScrollMagic.Scene({
////		triggerElement: "section#top",
//////		triggerHook: '50%',
////		duration: "100%"
////	})
////	.setTween("#timeline", 1, {height: "66%"}) // trigger a TweenMax.to tween
////	//.addIndicators({name: "1 (duration: 0)"})
////	.addTo(controller);
////	
//	//animate each .tileHome
//	var t = $('.tileHome:not(h1)').toArray();
//
//    t.forEach(function (trigger, i) {
//        new ScrollMagic.Scene({
//                triggerElement: t[i],
//                //triggerElement: '#timelineBottom'
//                // offset: '50px'
//                //reverse: false,
//                triggerHook: 0.66
//            })
//            .setTween(t[i], 0.3, {
//                opacity: 1
//            })
//			//.addIndicators({name: "tiles"})
//            .addTo(controller);
//    });
//});