var mic;

function setup() {
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    var vol = mic.getLevel();
    for(var i=0; i<1000; i+) {
        document.write(vol + '\n');
    }
}
