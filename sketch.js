
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbin1,dustbin2,dustbin3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1= new Ball(50,590,20);
	dustbin1=new Dustbin(500,630,200,30);
	dustbin2=new Dustbin(390,520,20,200);
	dustbin3=new Dustbin(610,520,20,200);
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 40 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
  drawSprites();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,40);
  ball1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		console.log("pressedUPARROW")
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:55,y:-80})
	}
}



