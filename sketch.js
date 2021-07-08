
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object=Bodies.rectangle(200,100,50,50)
  World.add(world,object)
  object2=Bodies.circle(150,200,50,50)
  World.add(world,object2)
  console.log(object)
  object3=Bodies.circle(200,250,50,50)
  World.add(world,object3)
  object4=Bodies.rectangle(250,300,50,50)
  World.add(world,object4)
  object5=Bodies.rectangle(300,350,50,50)
  World.add(world,object5)
  object6=Bodies.circle(350,400,50,50)
  World.add(world,object6)
  
}

function draw()
{
  Engine.update(engine)
  background(0);
  rectMode(CENTER);
  fill("red")
    rect(object.position.x,object.position.y,50,50);
    fill("blue")
    circle(object2.position.x,object2.position.y,50,50);
    fill("red")
    circle(object3.position.x,object3.position.y,50,50);
    fill("blue")
    rect(object4.position.x,object4.position.y,50,50);
    fill("pink")
    circle(object6.position.x,object6.position.y,50,50);
    fill("purple")
    rect(object5.position.x,object5.position.y,50,50);
}
