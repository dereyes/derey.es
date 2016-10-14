//preload vars
var introVid, introLogo, articles;

function preload() {
//    console.log('p5 preloading');
//
//        //loading pt.1 - create video
//    introVid = createVideo('video/Comp%204_final.mp4');
//    introVid.id('introVid');
//    introVid.loop();
}


//Init ScrollMagic
var controller = new ScrollMagic.Controller();

function setup() {
    console.log('p5 initialized');

    //pre-reveal
    introPosition();
    addTags();
    hashtagHover();
    hashtagClick();

    //loading pt.2 - load logo
    console.log('loading logo');
    //introLogo = createImg('images/home/logo.png');
    //introLogo.id('introLogo');
    //introLogo.parent('#introLogo_');
    introPosition();

    //loading pt.3 - reveal
    TweenLite.to('#introLogo', 1, {
        opacity: 1,
        ease: Power4.easeOut,
        onComplete: startScroll
    });

    revealArticles();
}

//function draw() {
//    console.log(frameRate());
//}

$(window).resize(function () {
    introPosition();
});