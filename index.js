var mic;
var video = document.querySelector('video');

function setup() {
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    var vol = mic.getLevel().toFixed(3);
    console.log(vol);
    vol = parseFloat(vol);
    if(vol > 0.7) {
        video.pause();
    }
}