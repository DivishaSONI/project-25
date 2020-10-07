
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	   groundSprite.shapeColor=color(255)
	

	engine = Engine.create();
	world = engine.world;
	dustbin1 = new Dustbin(500,600,10,100);
	dustbin2= new Dustbin(700,600,10,100);
	dustbin3=new Dustbin(600,650,200,20);
	paper1=new paper(350,500);
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	    World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  
  drawSprites();
 
}
function keyPressed (){
if(keyCode=== UP_ARROW)
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

}



