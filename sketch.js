const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var Object , block1;
var Polygon;

function setup(){
     var canvas = createCanvas(1200,400); 
    engine = Engine.create();
    world = engine.world;
    
  //level one
  block1 = new Block();
  block2 = new Block();
  block3 = new Block();
  block4 = new Block();
  block5 = new Block();
  block6 = new Block();
  block7 = new Block();
  //level two
  block8 = new Block();
  block9 = new Block();
  block10 = new Block();
  block11 = new Block();
  block12 = new Block();
  //level three
  block13 = new Block();
  block14 = new Block();
  block15 = new Block();
  //top
  block16 = new Block();

    polygon = Bodies.circle(50,200,20);
    world.add(this.polygon);
 
  Object = new Ground(450 , 390 , 900 , 20);

}

function draw(){
 background(0);
 imageMode(CENTER);
 image(polygon_img , polygon.position.x ,polygon.position.y);
 


 Object.display();
 SlingShot.display();
 
}

function  mouseDragged(){
  Matter .Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  SlingShot.fly();
}
