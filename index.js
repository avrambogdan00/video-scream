var mic;

function setup() {
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    var vol = mic.getLevel();
    document.write(vol + '\n');
}
