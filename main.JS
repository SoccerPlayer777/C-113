function preload(){
}
function setup(){
canvas = createCanvas(500, 400);
canvas.position(70, 200);
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 100, 80, 300, 250);
stroke(168, 10, 10);
fill(168, 10, 10);
circle(50, 50, 80);
circle(50, 430, 80);
circle(590, 50, 80);
circle(590, 430, 80);
fill(0, 128, 0);
stroke(0, 128, 0);
rect(90, 40, 460, 20);
rect(90, 420, 460, 20);
rect(40, 90, 20, 300);
rect(580, 90, 20, 300);
}
function take_snapshot(){
save('myFrame.png');
}