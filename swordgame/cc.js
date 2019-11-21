var face, head;

function preload() {
    face = loadAnimation('sprites/CC_test_face.png', 'sprites/CC_test_face1.png');
    head = loadAnimation('sprites/CC_head_outline.png');
}

function setup() {
    createCanvas(800, 300);
}

function draw() {
    background(255, 255, 255);
}

animation(face, 300, 150);
animation(head, 300, 150);