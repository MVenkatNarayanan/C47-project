var astroid;
var astroidGroup;
var score1=0;
var score2=0;

function preload(){
  bearImg=loadAnimation(
  "Images/bear-1.png","Images/bear-2.png","Images/bear-3.png","Images/bear-4.png","Images/bear-5.png","Images/bear-6.png","Images/bear-7.png","Images/bear-8.png","Images/bear-9.png","Images/bear-10.png","Images/bear-11.png","Images/bear-12.png","Images/bear-13.png","Images/bear-14.png","Images/bear-15.png","Images/bear-16.png","Images/bear-17.png","Images/bear-18.png","Images/bear-19.png","Images/bear-20.png","Images/bear-21.png","Images/bear-22.png","Images/bear-23.png","Images/bear-24.png","Images/bear-25.png","Images/bear-26.png","Images/bear-27.png","Images/bear-28.png","Images/bear-29.png","Images/bear-30.png","Images/bear-31.png","Images/bear-32.png","Images/bear-33.png","Images/bear-34.png","Images/bear-35.png");

    backImg=loadImage("Images/Background.png");
    astroidImg=loadAnimation("Images/astroids_1.png","Astroids/astroid2.png","Astroids/astroid3.png","Astroids/astroid4.png","Astroids/astroid5.png","Astroids/astroid6.png","Astroids/astroid7.png");
    bear1Img=loadImage("Images/Babybear.png");
    redImg=loadImage("Images/red.png");
    greenImg=loadImage("Images/green.png");
}


function setup() {
  createCanvas(1300,800);

  ground=createSprite(795,330,1500,10);
 // ground.visible=true;
  ground.addImage(backImg);
  ground.velocityX=-1;
  ground.scale=0.28;
 
  bear=createSprite(105,681, 50, 50);
  bear.addAnimation("running",bearImg);
  bear.scale=0.5;

 

    Gbar=createSprite(217,80,200,30);
  

  babyBearGroup=createGroup(); 
  astroidGroup=createGroup();

}

function draw() {
  background(0);  

  Astroids();
  //bear.collide(ground);


  if(babyBearGroup.isTouching(bear)){
    score1=score1+1;
  }

  if(score1===22){
    green1=createSprite(155,78,10,10);
    green1.addImage(greenImg);
    green1.scale=0.16;
  }

  if(score1===88){
    green2=createSprite(226,78,10,10);
    green2.addImage(greenImg);
    green2.scale=0.16;
  }
  if(score1===132){
    green3=createSprite(300,78,10,10);
    green3.addImage(greenImg);
    green3.scale=0.16;
  }
  if(score1===154){
    green4=createSprite(375,78,10,10);
    green4.addImage(greenImg);
    green4.scale=0.16;
  }
  if(score1===178){
    green5=createSprite(453,78,10,10);
    green5.addImage(greenImg);
    green5.scale=0.16;
  }
  if(score1===202){
    green6=createSprite(530,78,10,10);
    green6.addImage(greenImg);
    green6.scale=0.16;
  }

  if(astroidGroup.isTouching(bear)){
    score2=score2+1;
  }

  if(ground.x<500){
    ground.x=806;
  }

  if(keyDown(RIGHT_ARROW)){
    bear.velocityX=1;
  }
  
  // if(keyDown(LEFT_ARROW)){
  //   bear.velocityX=-2;
  // }

  BabyBear();

 

  //console.log(ground);

  drawSprites();
  textSize(30);
fill("white");
text(mouseX + "," + mouseY,30,30);
text("Score1:"+score1,1000,30);
text("Score2:"+score2,1000,50);
}
function Astroids(){
  if(frameCount%80===0){
    astroid=createSprite(990,98,10,10);
    astroid.x=random(690,990);
    astroid.addAnimation("falling",astroidImg);
    astroid.scale=0.2;
    astroid.velocityX=-3;
    astroid.velocityY=3;
    astroid.lifetime=500;
    astroidGroup.add(astroid);
  }
}
function BabyBear(){
  if(frameCount%300===0){
    bear1=createSprite(random(706,1006),720,10,10);
    bear1.addImage(bear1Img);
    bear1.scale=0.3;
    babyBearGroup.add(bear1);
  }
}