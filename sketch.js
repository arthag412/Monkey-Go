
var monkey , monkey_running
var bananaImage, obstacleImage
var survivalTime=0;
var ground;
var score=0;
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 
}



function setup() {
  createCanvas(600,600);
 
  
 monkey=createSprite(70,270,20,20);
 monkey.addAnimation("monkey",monkey_running);
 monkey.scale=0.15;
  
ground=createSprite(0,330,1000,21);
  
  bananaGroup=new Group();
  obstacleGroup=new Group();

}


function draw() {
background("white");

  
  if(gameState===PLAY){
  stroke("black");
  fill("black");
  textSize("20");
  text("Score:"+score,500,50);
  
stroke("black");
  fill("black");
  textSize("20");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,50,50);
    
     if(keyDown("space")&&monkey.y>=150){
   monkey.velocityY=-10;
  }  
  monkey.velocityY=monkey.velocityY+0.8;

 
  
  bananass();
  obstacless();
    if(bananaGroup.isTouching(monkey)){
   score=score+1;
   bananaGroup.destroyEach();
   
   }
  if(obstacleGroup.isTouching(monkey)){
    gameState=END;
   }
   }
  
  if(gameState===END){
    
 ground.velocityX=0;
bananaGroup.destroyEach();
obstacleGroup.destroyEach(); 
monkey.destroy();

  stroke("black");
  fill("black");
  textSize("50");
  text("GAMEOVER",250,150);
  
    
  }

monkey.collide(ground);
 
if(ground.x<100){
ground.x=ground.width/2;
  
}
 

  
 drawSprites(); 
}
function obstacless(){

if(frameCount%300===0){
  var obstacle=createSprite(350,285,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-5;
  obstacle.lifetime=300;
obstacleGroup.add(obstacle);
}
  
}
function bananass(){

if(frameCount%80===0){
var banana=createSprite(350,270,10,10);
  var r=Math.round(random(120,200));
  banana.y=r;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-5;
  banana.lifetime=300;
  bananaGroup.add(banana);

}
 
}



  





