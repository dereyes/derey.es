function hashtagHover() {
    $('.button').hover(function () {
        TweenLite.to(this, .25, {
            opacity: 1
        });
    }, function () {
        TweenLite.to(this, .6, {
            opacity: .6
        });
    });
}