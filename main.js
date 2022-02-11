song = "";

function preload() {
  song = loadSound("LLITN.mp3");
}

function setup() {
  canvas = createCanvas(550, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
    image(video, 0, 0, 550, 400);
}

function play() {
    song.play();
}

function stop() {
    song.stop();
}