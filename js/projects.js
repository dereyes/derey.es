//Init ScrollMagic
var controller = new ScrollMagic.Controller();
////JSON object that corresponds to the info we want
//var p;

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
    hashtagHover();
    linkHover();
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

function displayP(data) {
    p = data.p;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < p.length; j++) {
            if (a[i].attribute('projectTitle') == p[j].title) {
                //init description
                var desc = '<p class="hashtag">#PROJECTS</p>';
                //hero img
                desc = desc + p[j].hero;
                //hero img caption
                if (p[j].heroCaption != "") {
                    desc = desc + '<p class="caption">' + p[j].heroCaption + '</p>';
                }
                //title and subtitle
                desc = desc + '<h2>' + p[j].title + '</h2>' + '<h3>' + p[j].subtitle + '</h3>';

                //tools
                if (p[j].tools != "") {
                    desc = desc + '<p>' + p[j].tools + '</p>';
                }
                //client
                if (p[j].client != "") {
                    desc = desc + '<p class="projectDesc">Client: ' + p[j].client + '</p>';
                }
                //role
                if (p[j].role != "") {
                    desc = desc + '<p class="projectDesc">Role: ' + p[j].role + '</p>';
                }
                //status
                if (p[j].status != "") {
                    desc = desc + '<p class="projectDesc">Status: ' + p[j].status + '</p>';
                }
                //tags
                desc = desc + '<p class="hashtag">' + p[j].tags + '</p>';

                //add it all
                a[i].html(desc);
            }
        }
    }
}

$(window).resize(function () {
    introPosition();
});