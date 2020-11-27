const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;
function setup() {
  createCanvas(600,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(300,800,600,10);
  for(var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j < 550; j=j+50) { 
    plinkos.push(new Plinko(j,75)); 
  }
  for (var j = 50; j < 575; j=j+50) { 
    plinkos.push(new Plinko(j,175)); 
  }
  for (var j = 75; j < 550; j=j+50) { 
    plinkos.push(new Plinko(j,275)); 
  }
  for (var j = 50; j < 575; j=j+50) { 
    plinkos.push(new Plinko(j,375)); 
  }
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var j = 0; j < plinkos.length; j++) { 
    plinkos[j].display(); 
  }
  
  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  ground.display();
}
