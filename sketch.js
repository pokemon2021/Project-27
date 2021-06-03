
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,600,20);
	bob1 = new bob(100,575,40)
	bob2 = new bob(200,575,40)
	bob3 = new bob(300,575,40)	
	bob4 = new bob(400,575,40)
	bob5 = new bob(500,575,40)
	
	rope1=new rope(bob1.body,{x : 100, y : 250})
	rope2=new rope(bob2.body,{x : 200, y : 250})
    rope3=new rope(bob3.body,{x : 300, y : 250})
	rope4=new rope(bob4.body,{x : 400, y : 250})
	rope5=new rope(bob5.body,{x : 500, y : 250})

	Engine.run(engine);

	
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

        Matter.Body.applyForce(bob1.body,bob1.body.position,
			                     {x: -50, y: -45})
	}
	
	}




