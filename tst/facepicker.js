var face;
let head;

function preload() {
    head = loadImage('assets/CC_test_head_outline.png');
    // head = loadImage('https://i.imgur.com/GzSKmjW.png');
    //   face = loadAnimation("assets/CC_test_face.png", "assets/CC_test_face1.png")
}

function setup() {
    createCanvas(400, 400);
    image(head, 0, 0);
}

function draw() {
    background(220);
    image(head, 0, 0);
    // animation(face, 100, 100);
    // animation(glitch, 200, 100);
}
