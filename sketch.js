var spr;

function setup() {
    createCanvas(400, 400);
    backgroundColor = color(100, 50, 150);
    background(backgroundColor);
    spr = createSprite(
        width / 2, height / 2, 40, 40);
    spr.shapeColor = color(255);
    spr.velocity.y = 0.5;
}

function draw() {
    background(backgroundColor);
    drawSprites();
}

function mousePressed() {
    spr.position.x = mouseX;
    spr.position.y = mouseY;
}