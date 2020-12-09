const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Constraint.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(700,300,400,400);
	mango1 = new Mango(tree.x,tree.y,20);
	mango2 = new Mango(tree.x,tree.y,20);
  boy = new Boy(280,400,150,250);
  stone = new Stone(30,30,30,30);
  chain = new Chain(boy.body,stone.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  stone.display();
  drawSprites();
 
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});
}
function mouseReleased() {
    chain.fly();
}



