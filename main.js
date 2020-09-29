function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	jump = loadSound("jump.wav");
	coin_collect = loadSound("coin.wav");
	mushrooom_kill = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	game_over = loadSound("gameover.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log("Model is loaded!");
}

function gotPoses(result){
	if(result.length > 0){
	  console.log(result);
	  noseX = result[0].pose.nose.x;
	  noseY = result[0].pose.nose.y;
}
}

function draw() {
	game();
}
function video(){
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
}
