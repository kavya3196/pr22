const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine;
var world;
var object;

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;

  var options={
     isStatic:true
  }

  object=Bodies.rectangle(200,100,50,50,options)
  World.add(world,object)

  console.log(object)
}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  //rect(200,200,50,50);
  rect(object.position.x,object.position.y,50,50)
  
}
