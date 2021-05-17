const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var square1,square1IMG
var ground1

function preload(){
  square1IMG = loadImage("images/square.png")
}
function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  
  square1 = createSprite(100,70,35,35)
  square1.addImage(square1IMG)

  ground1 = new Ground(0,90,500,15)

  
}

function draw() {

Engine.update(engine)
 
ground1.display();
 
drawSprites(); 
   }

