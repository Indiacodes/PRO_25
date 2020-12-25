
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundOptions;
var ball, ballOptions;
var bin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//body options
	groundOptions = {
		isStatic : true
	}

	//Create the Bodies Here.
	ground = Bodies.rectangle(400, 695, 795, 20, groundOptions);
	ball = new CrumpledPaper(50, 650);
	bin = new Bin();
	console.log(ball);
	
	//add to the world
	World.add(world, ground);	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#2CE4E7");

  
  fill(100);
  rect(ground.position.x, ground.position.y, 795, 20);
  fill("magenta");
  ball.display();
  bin.showBin();

  if(keyDown(32)) {
	Matter.Body.applyForce(ball.body, ball.body.position, {x:1,y:-2});
  }
  
  drawSprites();
}



