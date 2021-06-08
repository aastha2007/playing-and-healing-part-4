const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function preload(){

}
function setup(){
  createCanvas(1400,800)
  
  wall1=new Maze(700,750,300,PI/4)
  wall2=new Maze(100,100,300,PI/5)
  wall3=new Maze(1328,396,300,PI/6)
  wall4=new Maze(56,527,300,PI/7)
  wall5=new Maze(300,296,PI/6,1800)
  
  
  dr=new Doctor(200,200)
  v1=new Virus(150,300,50)

}
function draw(){
  background("pink")
  Engine.update(engine);
  textSize(15);
  text(mouseX+" ,"+mouseY,700,400);
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  dr.display();
  v1.display();
}
