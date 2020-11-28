/*
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinobj, paperobj, groundobj;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbinobj = new dustbin(1200,650);
paperobj = new paper(200,450,40);
groundobj = new ground(width/2,670, width,20);

var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  paperobj.display();
  dustbinobj.display();
  groundobj.display();
  drawSprites();
 
}*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject    
var world;

function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
    dustbinObj=new dustbin(1000,650);
    paperObject=new paper(200,450,40);
    groundObject=new ground(width/2,670,width,20);
    //Create a Ground
    

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
    });

    Engine.run(engine);
    //Render.run(render);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:75,y:-75});
    
    }
}


