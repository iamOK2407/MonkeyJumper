
var monkey , monkeyrunning,bamboo;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstaclesGroup;
var gameover,gameoverImage,gameovervoice;

var score;
var PLAY=1;
var END=0 ;
//have to assign PLAY AFTER LINE 7
var playState=PLAY;
function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  gameoverImage=loadImage("gameover.png");
  gameovervoice=loadSound("gameover.mp3");
 
  
  
}



function setup() {
  createCanvas(500,300)
  
  monkey=createSprite(60,200,10,10);  
  monkey.addAnimation("monkeyrun",monkeyrunning);
  monkey.scale=0.1;
  monkey.debug=true;
  
  stick=createSprite(0,150,5,500);
  stick.visible=false;
  
score=0;
  fill("brown");
  bamboo=createSprite(60,295,1300,29);
  fill("white");
  bananaGroup=createGroup();
  obstaclesGroup=createGroup();
  bamboo.debug=false;
  monkey.setCollider("circle",0,0,300);
  
  obstaclesGroup=createGroup();
  bananaGroup=createGroup();
}


function draw() {
background("green");
   
  text("Score="+score,430,50);
  
  if(playState==PLAY){
     if(monkey.isTouching(bananaGroup)){
       bananaGroup.destroyEach();
       score=score+2;
     
      }
  
  
    if(keyDown("space")&& monkey.y >= 50){
      monkey.velocityY=-15
    }
    monkey.velocityY+=1.09;
  
  
                               
    if (bamboo.x < 0){
      bamboo.x = bamboo.width/2;
    }
    
     bananaF();
  obstaclesF(); 
     
     
     
     
     
   }
  
  if(stick.isTouching(bananaGroup)){
    playState=END;
  }
    
   if(monkey.isTouching(obstaclesGroup)){
      playState=END; 
  }

  else if(playState==END){
     obstaclesGroup.destroyEach();
    bananaGroup.destroyEach();
    monkey.destroy();
    gameover=createSprite(250,150);
    gameover.addImage(gameoverImage);
    gameover.scale=2;
  }
  


  monkey.collide(bamboo);
  drawSprites();
}

function bananaF(){
  if(World.frameCount%80==0){
  banana=createSprite(400,200,10,10);
    banana.addImage("moving",bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(100,150));
    banana.velocityX=-7;
    banana.setLifetime=50;
    
    bananaGroup.add(banana);
    
   
  }
}
  
  function obstaclesF(){
    
    if (frameCount % 60 === 0) {
     obstacle = createSprite(600,275,40,10);
     
    obstacle.addImage("obstacleimage",obstacleImage);
    obstacle.scale = 0.14;
    obstacle.velocityX = -9;
    
     //assign lifetime to the variable
    obstacle.lifetime = 2000;
    
   obstaclesGroup.add(obstacle);
    
  }
  }
  
  
  
  





