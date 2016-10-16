function introPosition() {
    console.log('positioning');
    //set height of intro divs

    $('#introLogo').css({
        'marginTop': (innerHeight / 2) - 150,
        'marginLeft': (innerWidth / 2) - 150
    });
    $('#scrollDown').css({
        'paddingTop': innerHeight - 75,
        'marginLeft': (innerWidth / 2) - 75
    });
    $('#introText').css({
        'marginTop': innerHeight
    });
    $('#gform').css({
        'paddingBottom': innerHeight / 3
    });
    $('#thankyou_message').css({
        'paddingBottom': innerHeight / 3
    });
    $('#contentTop').css({
        'height': $('header').outerHeight(true)
    });
}


function addTags() {
    console.log('adding tags');

    $('article.project').prepend('<p class="hashtag">#PROJECTS</p>');
    $('article.explorations').prepend('<p class="hashtag">#EXPLORATIONS</p>');
    $('article.edu').prepend('<p class="hashtag">#EDUCATION</p>');
    $('article.aboutme').prepend('<p class="hashtag">#ABOUTME</p>');
    $('article.recog').prepend('<p class="hashtag">#RECOGNITION</p>');
    $('article.contact').prepend('<p class="hashtag">#CONTACT</p>');

    $('.project.designresearch').append('<p class="hashtag">#DesignResearch&nbsp</p>');
    $('.project.frontenddev').append('<p class="hashtag">#FrontEndDev&nbsp</p>');
    $('.project.generativegraphics').append('<p class="hashtag">#GenerativeGraphics&nbsp</p>');
    $('.project.uidesign').append('<p class="hashtag">#UIDesign&nbsp</p>');
    $('.project.videoproduction').append('<p class="hashtag">#VideoProduction&nbsp</p>');
    $('.project.visualdesign').append('<p class="hashtag">#VisualDesign&nbsp</p>');
    $('.project.vrexperiencedesign').append('<p class="hashtag">#VRExperienceDesign&nbsp</p>');
    $('.project.writing').append('<p class="hashtag">#Writing</p>');
}

var hoverIn = 50;
var hoverOut = 1000;
var transparent = .3;
var selection = 'all';
var selectionPrev = 'all';

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

function hashtagClick() {
    $('nav a').click(function () {

        selectionPrev = selection;
        selection = $(this).attr('id');
        console.log(selection);

        if (selection == 'contact') {
            TweenLite.to(window, 1, {
                scrollTo: '#titleContact',
            });
        } else if (selection == selectionPrev) {
            scrollTop();
        } else if (selection != selectionPrev) {
            //if selection is new, fade out column then display correct articles
            TweenLite.to('#column', .5, {
                opacity: 0,
                onComplete: articleDisplay
            });
        }
    });

    function scrollTop() {
        TweenLite.to(window, .5, {
            scrollTo: '#contentTop'
        });
    }

    function scrollTopFadeIn() {
        TweenLite.to(window, .5, {
            scrollTo: '#contentTop',
            onComplete: fadeInColumn
        });
    }

    function articleDisplay() {
        //display correct articles depending on selection, then fade in column
        if (selection == 'all') {
            articleShowAll();
            scrollTopFadeIn();
        } else if (selection == 'work') {
            articleShowAll();
            $('article:not(.project, .explorations), #titlePreHistory').hide();
            scrollTopFadeIn();
        } else if (selection == 'aboutMe') {
            articleShowAll();
            scrollTopFadeIn();
            $('article:not(.recog, .edu, .aboutme)').hide();
            $('#titleNew, #year2015').hide();
            //scrollTopFadeIn();
        }
    }

    function articleShowAll() {
        $('.title, .year').show();
        $('article').show();
    }

    function fadeInColumn() {
        TweenLite.to('#column', .5, {
            delay: .5,
            opacity: 1
        });
    }
}