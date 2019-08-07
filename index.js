var mic;

function setup() {
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    var vol = mic.getLevel().toFixed(3);
    document.write(vol + '  ');
    setTimeout(function() {
        document.body.innerHTML = '';
    }, 500);
    
}
