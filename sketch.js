const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var slingShot;
var box;
var score;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    box1 = new Box(600,325);
    box2 = new Box(600,275);
    box3 = new Box(600,225);
    box4 = new Box(600,175);
    box5 = new Box(600,125);
    box6 = new Box(600,375);
    box7 = new Box(600,75);
    ball =  new Ball(300,200)

    slingShot = new Slingshot(this.ball,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  ball.display();
  slingShot.display();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

