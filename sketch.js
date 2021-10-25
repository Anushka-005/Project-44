var bg;
var aimImg,aim;
var aiming,aimingImg;
var edges;
var shot ,shotImg;

function preload(){
 bg = loadImage("skybackground.png");
 aimImg = loadImage("Aim.png");
 aimingImg = loadImage("Aiming.png");
 shotImg = loadImage("shot.png");

}

function setup() {
	createCanvas(1400, 750);

 aiming = createSprite(300,400,10,10); 
 aiming.addImage("Aming",aimingImg);
 aiming.scale = 0.6;
 aiming.velocityX = 4;

 aim = createSprite(670,400,10,10);
 aim.addImage("Aim",aimImg);
 aim.scale = 0.4;
 
 

edges = createEdgeSprites();


}


function draw() {
  background(128,0,0);
  
  aim.x = mouseX;
  aim.y = mouseY;

  if(aiming.isTouching(edges[1])){
   aiming.velocityX = -6;
   shot.velocityX = aiming.velocityX;
  }

  if(aiming.isTouching(edges[0])){
    aiming.velocityX = 6;
    shot.velocityX = aiming.velocityX;
  }

  if(aim.isTouching(aiming)){
    if( keyDown("SPACE")){
  // shot.visible = true;
   shot = createSprite(aim.x,aim.y);
  shot.addImage("shooting",shotImg);
  shot.scale = 0.5;
  shot.velocityX = aiming.velocityX;
  //shot.visible = false;

    }
  }
  
  
  
  drawSprites();

}






















//Anushka