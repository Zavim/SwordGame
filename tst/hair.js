function Hair() {
    hair1 = loadImage('assets/hair1.png');
    hair2 = loadImage('assets/hair2.png');
    imageMode(CENTER);

    this.x = (windowWidth / 2) * 2;
    this.y = (windowHeight / 3) * 1.22;


    this.show = function () {
        if (hairArray[hairArrayPosition] == 'hair1') {
            image(hair1, this.x, this.y);
        } else if (hairArray[hairArrayPosition] == 'hair2') {
            image(hair2, this.x, this.y);
        }
    }
}