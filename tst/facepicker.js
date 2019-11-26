var face;
let head;

function preload() {
    head = loadImage('src/assets/CC_test_head_outline.png');
    //   face = loadAnimation("assets/CC_test_face.png", "assets/CC_test_face1.png")
}

function setup() {
    createCanvas(400, 400);
    image(head, 0, 0);
}

function draw() {
    background(220);
    // animation(face, 100, 100);
    // animation(glitch, 200, 100);
}