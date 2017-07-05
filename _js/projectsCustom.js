function revealArticle() {
    TweenLite.to('article', 1, {
        opacity: 1,
        ease: Power4.easeOut
    });
    TweenLite.to('#return', 1, {
        opacity: .6,
        ease: Power4.easeOut
    });
}

function introPosition() {
    console.log('positioning');
    //set height of intro divs

    $('#contentTop').css({
        'height': $('header').outerHeight(true)
    });
}