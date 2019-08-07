var mic;
var video = document.getElementById('video');

function setup() {
    //video.play();
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    var vol = mic.getLevel().toFixed(3);
    
    vol = parseFloat(vol);
    if(vol > 0.7) {
        stopVideo();
        console.log(vol);
    }
}
