
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy,boyImage,treeImage,tree,stone,ground,mango1,mango2,mango3,mango4,mango5,mango6,sling;
function preload()
{
  boyImage = loadImage("sprites/boy.png")
  treeImage = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;
	//tree = new Tree(800, 170, 70, 500)	
	//Create the Bodies Here.
stone = new Stone(150,200,35)
ground = new Ground(1000, 650, 2000,20)
mango1 = new Mango(800,320,20)
mango2 = new Mango(750,280,20)
mango3 = new Mango(850,300,20)
mango4 = new Mango(760,220,20)
mango5 = new Mango(790,270,20)
mango6 = new Mango(830,250,20)
sling = new Sling(stone.body, {x: 120, y: 450}) 
tree = createSprite(800,370,70,500)
tree.addImage(treeImage)
tree.scale = 0.45
boy = createSprite(200, 550, 10,10)
boy.addImage(boyImage)
boy.scale = 0.15
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
  tree.display();	
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  sling.display();
 
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
//console.log(mangoBodyPosition)
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance <=((lmango.radius*2)+(lstone.radius*2))) {
Matter.Body.setStatic(lmango.body,false)
}
}

function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.setPosition(stone.body, {x:135, y:420})
    sling.attach(stone.body);
  }


}