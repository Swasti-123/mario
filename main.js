img="";
nx=0;
ny=0;
mx=325;
my=325;
function preload() {
	world_start = loadSound("world_start.wav");
	kick = loadSound("kick.wav");
	coin = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	jump = loadSound("jump.wav");
	dead = loadSound("mariodie.wav");
	img= loadImage("mario05.png");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650,400);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video= createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console')
	poseNet= ml5.poseNet(video, modelLoaded);
	poseNet.on( 'poses', gotPoses);
}

function modelLoaded(){
console.log("model has loaded");
}

function gotPoses(results){
if(results.length > 0){
	console.log(results);
	nx= results[0].pose.nose.x;
	ny= results[0].pose.nose.y;

}

}

function draw() {
	background("#D3D3D3");
    if(nx<300){
    mx= mx-1
	}
	if(nx>300){
		mx= mx+1
	}
	if(ny<150){
    my= my-1
	}
	
	
	image(img, mx, my, 40, 70);
	game()
}






