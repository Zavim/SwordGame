function Face() {
    face1 = loadImage('assets/CC_test_face.png');
    face2 = loadImage('assets/face2.png');
    face3 = loadImage('assets/face3.png');
    imageMode(CENTER);

    this.x = (windowWidth / 2) * 2;
    this.y = (windowHeight / 3) * 2;


    this.show = function () {
        if (faceArray[faceArrayPosition] == 'face1') {
            image(face1, this.x, this.y);
        } else if (faceArray[faceArrayPosition] == 'face2') {
            image(face2, this.x, this.y);
        } else if (faceArray[faceArrayPosition] == 'face3') {
            image(face3, this.x, this.y);
        }
    }
}