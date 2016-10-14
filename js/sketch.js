//vector grid vars
var gridScale = 20;
var gridCols, gridRows;
var inc = .5;

var particlesT = [];
var particlesL = [];
var particlesB = [];
var particlesR = [];
var particlesN = 10; //particles per side
var Particle;
var fc = 0;

//arrays of spawn points, all of which are on the center box border
var spawn = [];
var boxT, boxL, boxB, boxR;
var boxW = 150;
var boxH = 450;

var lifeMax = 10.25;

function setup() {
    console.log('p5 loaded');
    createCanvas($(window).width(), $(window).height());

    angleMode(DEGREES);

    gridSetup();
    //gridDraw();

    boxT = (round(height / 2) - 224.5);
    boxR = (round(width / 2) + 76.5);
    boxB = (round(height / 2) + 226.5);
    boxL = (round(width / 2) - 74.5);

    for (var i = 0; i < particlesN; i++) {
        var randomX = int(random(0, boxW));
        particlesT[i] = new Particle(boxL + randomX, boxT);
    }

    for (var i = 0; i < particlesN; i++) {
        var randomY = int(random(0, boxH));
        particlesR[i] = new Particle(boxR, boxT + randomY);
    }

    for (var i = 0; i < particlesN; i++) {
        var randomX = int(random(0, boxW));
        particlesB[i] = new Particle(boxL + randomX, boxB);
    }

    for (var i = 0; i < particlesN; i++) {
        var randomY = int(random(0, boxH));
        particlesL[i] = new Particle(boxL, boxT + randomY);
    }

    //background("#191919");
    //gridDraw();

    noiseDetail(1, 0.2);
}

function draw() {
    background(0);
    vectorRun();


    //addRemoveParticles();
    //background("#191919");
    //fill("rgba(30,30,30,.01)");
    //rect(0, 0, width, height);
    for (var i = 0; i < particlesN; i++) {
        particlesT[i].update();
        particlesT[i].borders();
        particlesT[i].show();
    }

    for (var i = 0; i < particlesN; i++) {
        particlesR[i].update();
        particlesR[i].borders();
        particlesR[i].show();
    }

    for (var i = 0; i < particlesN; i++) {
        particlesB[i].update();
        particlesB[i].borders();
        particlesB[i].show();
    }

    for (var i = 0; i < particlesN; i++) {
        particlesL[i].update();
        particlesL[i].borders();
        particlesL[i].show();
    }

    fc = frameCount * .005;
    //fc = 1;
    //if (fc < 2) {
    //fc = (noise(frameCount));
    //}

    //console.log(frameRate());
    //noLoop();
}

function gridSetup() {
    gridCols = width / gridScale;
    gridRows = height / gridScale;
}

function gridDraw() {
    stroke(255);
    noFill();
    for (var i = 0; i < gridRows; i++) {
        //console.log(i);
        for (var j = 0; j < gridCols; j++) {
            rect(i * gridCols, j * gridRows, gridCols, gridRows);
            //rect(j * gridScale, i * gridScale, gridScale, gridScale)
        }
    }
}

function vectorRun() {
    var yOff = 0;
    for (var y = 0; y < gridRows; y++) {
        var xOff = 0;
        for (var x = 0; x < gridCols; x++) {
            var angle = noise(xOff, yOff);
            var v = p5.Vector.fromAngle(angle);
            xOff += inc;
            stroke(255);
            push();
            translate(x * gridCols, y * gridRows);

            //uncomment to draw vectors
            rotate(v.heading());
            line(0, 0, gridScale, 0);
            //

            pop();
        }
    }
}

function addRemoveParticles() {
    for (var i = particlesT.length - 1; i >= 0; i--) {
        //check life
        if (particlesT[i].life <= 0) {
            particlesT.splice(i, 1);
        }

        //add particles until ArrayList length
        while (particlesT.length < particlesN) {
            particlesT.push(new Particle(boxL + (int(random(0, boxW))), boxT))
        }
    }
}

// PARTICLE OBJECT

function Particle(x, y) {
    this.life, this.lifeRate;
    this.position = createVector(x, y);
    this.life = random(0.5 * lifeMax, lifeMax);
    this.lifeRate = random(0.01, 0.02);

    var zOld = 0;
    var zNew = zOld + fc;

    this.update = function () {
        /*
        var angle = noise(this.position.x * 0.01, this.position.y * 0.01, 0) * fc;
        //        this.velocity = p5.Vector.fromAngle(angle - 90);
        this.velocity = p5.Vector.fromAngle(angle + noise(fc) + 3.5);
        this.position.add(this.velocity);
        this.life = this.life - this.lifeRate;\
        */

        //console.log(noise(this.position.x, this.position.y, 0));

        //        var xOff = (noise(this.position.x, 0, zOld) - noise(this.position.x, 0, zNew)) * 10;
        //
        //        var yOff = (noise(0, this.position.y, zNew) + noise(this.position.x, this.position.y, zOld)) * 10;
        //
        //        this.position.x = this.position.x + xOff;
        //        this.position.y = this.position.y + yOff;
        //
        //        zOld = zNew;
        //        zNew = zNew + fc;

        //console.log(xOff);

        //this.position.y = this.position.y + ((noise(this.position.y, fc) * 10));
    }

    this.show = function () {
        //stroke(0, 50);
        //strokeWeight(10);
        //stroke(0);
        noStroke();
        fill("#d8be73");
        //point(this.position.x, this.position.y);
        ellipse(this.position.x, this.position.y, 2, 2);
    }

    this.borders = function () {
        if (this.position.x < 0) {
            this.position.x = width;
        }
        if (this.position.y < 0) {
            this.position.y = height;
        }
        if (this.position.x > width) {
            this.position.x = 0;
        }
        if (this.position.y > height) {
            this.position.y = 0;
        }
    }
}