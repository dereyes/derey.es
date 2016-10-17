//Init ScrollMagic
var controller = new ScrollMagic.Controller();

function setup() {
    console.log('p5 initialized');

    //pre-reveal
    hashtagHover();
    introPosition();

    //loading pt.3 - reveal
    TweenLite.to('header', 1, {
        opacity: 1,
        ease: Power4.easeOut,
    });

    TweenLite.to('.year', .5, {
        opacity: .25,
        ease: Power4.easeOut,
        onComplete: revealArticle
    });
}

$(window).resize(function () {
    introPosition();
});