function Head() {
    headimage = loadImage('assets/CC_test_head_outline.png');
    imageMode(CENTER);

    this.x = (windowWidth / 2) * 2;
    this.y = (windowHeight / 3) * 2;

    this.show = function () {
        image(headimage, this.x, this.y);
    }
}