function Body() {
    headimage = loadImage('assets/bodyfinish.png');
    imageMode(CENTER);

    this.x = (windowWidth / 2) * 2;
    this.y = (windowHeight / 3) * 2;

    this.show = function () {
        image(headimage, this.x, this.y);
    }
}