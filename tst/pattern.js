function Pattern() {
    pattern1 = loadImage('assets/pattern1.png');
    pattern2 = loadImage('assets/pattern2.png');
    imageMode(CENTER);

    this.x = (windowWidth / 2) * 2;
    this.y = (windowHeight / 3) * 1.93;


    this.show = function () {
        if (patternArray[patternArrayPosition] == 'pattern1') {
            image(pattern1, this.x, this.y);
        } else if (patternArray[patternArrayPosition] == 'pattern2') {
            image(pattern2, this.x, this.y);
        }
    }
}