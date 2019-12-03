var face;
var head;



function preload() {
    head = loadImage('assets/CC_test_head_outline.png');
    // face = loadAnimation("assets/CC_test_face.png", "assets/CC_test_face1.png")
    face = loadImage("assets/CC_test_face.png");
    next_arrow = loadImage('assets/next_arrow.png');
    prev_arrow = loadImage('assets/prev_arrow.png');


}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    image(head, 0, 0);
    image(face, 0, 0);
    image(next_arrow, 0, 0);
    image(prev_arrow, 0, 0);

}

function draw() {
    background(220);

    image(head, windowWidth / 2, windowHeight / 2);
    image(face, windowWidth / 2, windowHeight / 2);
    image(next_arrow, windowWidth / 2 + 230, windowHeight / 2);
    image(prev_arrow, windowWidth / 2 - 230, windowHeight / 2);
    // animation(face, windowWidth / 2, windowHeight / 2);
    // animation(glitch, 200, 100);
}