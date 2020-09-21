const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = { isStatic : true };
var ball_options={restitution:1};
  
  box = Bodies.rectangle(200,200,100,100);
 ground=Bodies.rectangle(200,390,400,20,ground_options);
 ball=Bodies.circle(300,200,50,ball_options);

  World.add(world,box);
 World.add(world,ground);
World.add(world,ball);

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER) ;
  rect(box.position.x,box.position.y,100,100);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
circle(ball.position.x,ball.position.y,50);  

}