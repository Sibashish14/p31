const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine,boy,thunder1,thunder2,thunder3,thunder4,drops, maxDrops=100;var drops=[];
function preload(){
thunder1 = loadImage("images/1.png");  
thunder2 = loadImage("images/2.png");  
thunder3 = loadImage("images/3.png");  
thunder4 = loadImage("images/4.png");  
}

function setup(){
  canvas = createCanvas(1200,600); 
  engine = Engine.create();
  world = engine.world;
  boy = new Boy(width/2,400,150,215);
  if(frameCount%150===0){
    for(var i=0;i<maxDrops;i++){
      drops.push(new Drops(random(0,1200),random(0,400)));
    }
  }
}

function draw(){
    background(0); 
    boy.display();
   
    
    thunder();
   
    for(var i=0;i<maxDrops;i++){
      drops[i].display();
      drops[i].updateY();
    }
    drawSprites();
}   
function thunder(){
  if(frameCount%80===0){
    var thunderLight = createSprite(random(200,900),100);
    thunderLight.scale = random(0.5,0.8);
    thunderLight.lifetime=5;
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1:thunderLight.addImage(thunder1);
      break;
      case 2:thunderLight.addImage(thunder2);
      break;
      case 3:thunderLight.addImage(thunder3);
      break;
      case 4:thunderLight.addImage(thunder4);
      break;
      default:break;
    }
  }
}
