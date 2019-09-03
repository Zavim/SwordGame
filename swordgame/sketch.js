var buttonW = 80;
var buttonH = 40;
var canvasW = 256;
var canvasH = 192;
var pad = 6;

function setup() {
    createCanvas(canvasW, canvasH);
    background('#222222');
    logInB = new Clickable(canvasW / 2 - buttonW / 2, pad);
    logInB.width = buttonW;
    logInB.height = buttonH;
    logInB.text = "Log In";

    logInB.onHover = function () {
        this.color = '#AAAAFF';
    }

    logInB.onOutside = function () {
        this.color = '#FFFFFF';
    }

    myInfoB = new Clickable(canvasW / 2 - buttonW / 2, buttonH + 2 * pad);
    myInfoB.width = buttonW;
    myInfoB.height = buttonH;
    myInfoB.text = "My Info";

    myInfoB.onHover = function () {
        this.color = '#AAAAFF';
    }
    myInfoB.onOutside = function () {
        this.color = '#FFFFFF';
    }

    practiceB = new Clickable(canvasW / 2 - buttonW / 2, (2 * buttonH + 3 * pad));
    practiceB.width = buttonW;
    practiceB.height = buttonH;
    practiceB.text = "Practice";

    practiceB.onHover = function () {
        this.color = '#AAAAFF';
    }

    practiceB.onOutside = function () {
        this.color = '#FFFFFF';
    }

    tournamentB = new Clickable(canvasW / 2 - buttonW / 2, (3 * buttonH + 4 * pad));
    tournamentB.width = buttonW;
    tournamentB.height = buttonH;
    tournamentB.text = "Tournament";

    tournamentB.onHover = function () {
        this.color = '#AAAAFF';
    }

    tournamentB.onOutside = function () {
        this.color = '#FFFFFF';
    }
}

function draw() {
    logInB.draw();
    myInfoB.draw();
    practiceB.draw();
    tournamentB.draw();
}