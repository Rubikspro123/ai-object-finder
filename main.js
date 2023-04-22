function setup(){
    canvas = createCanvas(360, 240);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(360,240);
    video.hide()
    
}
function draw(){
    image(video, 0, 0, 360,240);}