//Init ScrollMagic
var controller = new ScrollMagic.Controller();

function setup() {
    console.log('p5 initialized');

    //pre-reveal
    addTags();
    hashtagHover();
    navClick();
    introPosition();

    //loading pt.3 - reveal
    TweenLite.to('#introLogo', 1, {
        opacity: 1,
        ease: Power4.easeOut,
        onComplete: startScroll
    });

    revealArticles();
}

$(window).resize(function () {
    introPosition();
});