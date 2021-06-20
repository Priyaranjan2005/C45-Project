var space_image;
var p_spaceShip, e_spaceShip, p_spaceShip_image, e_spaceShip_image;
var fire_ball_image, fire_ball;
var e_spaceShip_group;

function preload(){
  space_image = loadImage("space_image.png");
  p_spaceShip_image = loadImage("p_spaceship.png");
  e_spaceShip_image = loadImage("e_spaceship.png");
  fire_ball_image = loadImage("fire_ball.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2,windowHeight/2,innerWidth,innerHeight);
  bg.addImage(space_image);
  bg.scale = 5.9

  // Playing Character
  p_spaceShip = createSprite(90,400,50,50);
  p_spaceShip.addImage(p_spaceShip_image);
  p_spaceShip.scale = 0.25;
  
  // NPC
  e_spaceShip = createSprite(1000,400,50,50);
  e_spaceShip.addImage(e_spaceShip_image);
  e_spaceShip.scale = 0.1;

}

function draw(){
  background(space_image);
  bg.depth = bg.depth - 1;
  bg.x -= 2 ;

  if(bg.x<1079/2){
    bg.x = windowWidth/2;
  }

  if(keyDown("UP_ARROW")){
    p_spaceShip.y = p_spaceShip.y-2; 
  }
  if(keyDown("DOWN_ARROW")){
    p_spaceShip.y = p_spaceShip.y+2; 
  }
  if(keyDown("SPACE")){
    bg.x -= 4 ; 
     
  }
  if(keyDown("F") && frameCount%20===0){
    fire();
  }


  drawSprites();
}

function fire(){
  fire_ball = createSprite(90,p_spaceShip.y,50,50);
  fire_ball.addImage(fire_ball_image);
  fire_ball.scale = 0.10;
  fire_ball.velocityX = 5;
  
}