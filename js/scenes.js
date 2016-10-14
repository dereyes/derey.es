//function revealIntro() {
//    console.log('fading in logo');
//
////    TweenLite.to(introLogo.elt, 1, {
////        opacity: 1,
////        ease: Power4.easeOut,
////        onComplete: startScroll
////    });
//}

function startScroll() {
    //called after reveal
    $('#column').css('display', 'block');

    TweenLite.to('header', 1, {
        opacity: 1,
        ease: Power4.easeOut
    });
    TweenLite.to('#scrollDown', 1, {
        delay: 1,
        opacity: 1,
        ease: Power4.easeOut,
        marginTop: -20
    });
    //
    //    TweenLite.to($('header nav'), 1, {
    //        opacity: 1,
    //        ease: Power4.easeOut
    //    });

    var sceneIntro = new ScrollMagic.Scene({
            triggerElement: '#contentTop',
            duration: '33%',
            triggerHook: 1
        })
        .setTween('#introLogo', {
            opacity: '0'
        })
        //            .addIndicators({
        //                name: 'introFade'
        //            })
        .addTo(controller);

    var sceneIntroVid = new ScrollMagic.Scene({
            triggerElement: '#introText',
            duration: '33%',
            triggerHook: 1
        })
        .setTween('#introVid', {
            opacity: '0'
        })
        //        .addIndicators({
        //            name: 'introGifFade'
        //        })
        .addTo(controller);

    var sceneBGColor = new ScrollMagic.Scene({
            triggerElement: '#introText',
            duration: '33%',
            triggerHook: 1
        })
        .setTween('body', {
            backgroundColor: '#fff'
        })
        //        .addIndicators({
        //            name: 'introGifFade'
        //        })
        .addTo(controller);
    var sceneTimeline = new ScrollMagic.Scene({
            triggerElement: '#contentTop',
            duration: '66%',
            triggerHook: 1
        })
        .setTween('#timeline', {
            height: '66%'
        })
        //.addIndicators({
        //    name: 'timelineFade'
        //})
        .addTo(controller);

    var sceneHeaderBG = new ScrollMagic.Scene({
            triggerElement: '#introText',
            triggerHook: 1
        })
        .setTween('header', 0, {
            background: 'rgba(192, 192, 192, 1)'
        })
        //.addIndicators({
        //    name: 'timelineFade'
        //})
        .addTo(controller);

    //    var sceneNavBG = new ScrollMagic.Scene({
    //            triggerElement: '#introText',
    //            triggerHook: 1
    //        })
    //        .setTween('header nav', 0, {
    //            background: 'rgba(255, 255, 255, 1)'
    //        })
    //        //.addIndicators({
    //        //    name: 'timelineFade'
    //        //})
    //        .addTo(controller);
}

function revealArticles() {
    articles = $('article').toArray();

    articles.forEach(function (trigger, index) {
        new ScrollMagic.Scene({
                triggerElement: articles[index],
                //triggerElement: '#timelineBottom'
                // offset: '50px'
                //reverse: false,
                triggerHook: .66
            })
            .setTween(articles[index], .5, {
                opacity: 1
            })
            //                .addIndicators({
            //                    name: 'reveal'
            //                })
            .addTo(controller);
    });

}