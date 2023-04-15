function preload() {

}

function setup() {
    canvas = createCanvas(500, 375);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 375);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}

function modelLoaded() {
    console.log("poseNet is ready!");
}

function capture_image() {
    save('My_Mustache_Filter_Image.png');
}



function draw() {
    image(video, 0, 0, 500, 375);
}

function gotResult(result) {
    if (result.length > 0) {
        console.log(result);
        console.log("x = " + result[0].pose.nose.x);
        console.log("y = " + result[0].pose.nose.y);
    }
}