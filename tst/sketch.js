var body;
var face;
var pattern;
var hair;
var faceArray = ['face1', 'face2', 'face3'];
var faceArrayPosition = 0;

var hairArray = ['hair1', 'hair2'];
var hairArrayPosition = 0;

var patternArray = ['pattern1', 'pattern2', 'pattern3'];
var patternArrayPosition = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    body = new Body();
    face = new Face();
    hair = new Hair();
    pattern = new Pattern();
    next_arrow = loadImage('assets/next_arrow.png');
    prev_arrow = loadImage('assets/prev_arrow.png');
}

function draw() {
    background(200);
    image(next_arrow, windowWidth / 2 + 230, windowHeight / 2);
    image(prev_arrow, windowWidth / 2 - 230, windowHeight / 2);
    scale(.5);
    pattern.show();
    body.show();
    face.show();
    hair.show();

}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        faceArrayPosition = (faceArrayPosition - 1 + faceArray.length) % faceArray.length;
        console.log(faceArrayPosition);
    } else if (keyCode === RIGHT_ARROW) {
        faceArrayPosition = (faceArrayPosition + 1 + faceArray.length) % faceArray.length;
        console.log(faceArrayPosition);

    }
}