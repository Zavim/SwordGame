var head;
var face;
var faceArray = ['face1', 'face2', 'face3'];
var faceArrayPosition = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    head = new Head();
    face = new Face();
    next_arrow = loadImage('assets/next_arrow.png');
    prev_arrow = loadImage('assets/prev_arrow.png');
}

function draw() {
    background(200);
    image(next_arrow, windowWidth / 2 + 230, windowHeight / 2);
    image(prev_arrow, windowWidth / 2 - 230, windowHeight / 2);
    scale(.5);
    head.show();
    face.show();

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