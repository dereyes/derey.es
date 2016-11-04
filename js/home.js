//Init ScrollMagic
var controller = new ScrollMagic.Controller();
//array of project article placeholders
var a = [];
//array of project JSON objects
var p = [];

function preload() {
    a = selectAll('.project');
    loadJSON('/json/projects.json', displayP);
}

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
    //}
}

function displayP(data) {
    p = data.p;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < p.length; j++) {
            if (a[i].attribute('projectTitle') == p[j].title) {
                //init description
                var desc;
                //preview img, title, and subtitle
                desc = p[j].preview + '<h2>' + p[j].title + '</h2>' + '<h3>' + p[j].subtitle + '</h3>';
                //tools
                if (p[j].tools != "") {
                    desc = desc + '<p>' + p[j].tools + '</p>';
                }
                //readMore
                if (p[j].readMore != "") {
                    desc = desc + '<a href="' + p[j].readMore + '" class="button">Read More</a><br>';
                }
                //tags
                desc = desc + '<p class="hashtag">' + p[j].tags + '</p>';

                //add it all
                a[i].html(desc);
                
                
                
                
//                a[i].html(p[j].preview + '<h2>' + p[j].title + '</h2>' + '<h3>' + p[j].subtitle + '</h3>' + '<p>' + p[j].tools + '</p>' + '<a href="' + p[j].readMore + '" class="button">Read More</a><br>' + '<p class="hashtag">' + p[j].tags + '</p>');
            }
        }
    }
}

$(window).resize(function () {
    introPosition();
});