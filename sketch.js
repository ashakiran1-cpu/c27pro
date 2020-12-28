
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var bob1,bob2;
var log1,log2;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	log1=new Roof();
	
	bob1 = new Bob(280,300,30)
	bob2 = new Bob(340,300,30)
	bob3 = new Bob(400,300,30)
	bob4 = new Bob(460,300,30)
	bob5 = new Bob(520,300,30)


	rope1=new Rope(bob1.body,log1.body,-120)
	rope2=new Rope(bob2.body,log1.body,-60)
	rope3=new Rope(bob3.body,log1.body,0)
	rope4=new Rope(bob4.body,log1.body,60)
	rope5=new Rope(bob5.body,log1.body,120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  log1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:100,y:100})
	}
}



