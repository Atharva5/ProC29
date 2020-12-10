
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(600,490,1200,35);
	box1 = new Box(300,300,100,200);
	

	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);

  ground1.display();
  box1.display();
  
  
  drawSprites();
 
}




