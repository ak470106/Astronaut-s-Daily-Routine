var astronaut, sleep, brush, gym1, gym2, drink, eat, move, bg, backg
function preload() {
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym1 = loadAnimation("gym1.png","gym2.png");
  gym2 = loadAnimation("gym11.png","gym12.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  move = loadAnimation("move.png","move1.png");
  backg = loadImage("iss.png");
}
function setup() {
  createCanvas(800,400);
  edges = createEdgeSprites();
  bg = createSprite(400,200,800,400);
  bg.addImage("bg",backg);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleep",sleep);
}

function draw() {
  background(255,255,255);
  
  astronaut.bounceOff(edges);
  if (keyDown("up")){
    astronaut.addAnimation("brush",brush);
    astronaut.changeAnimation("brush");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
  }
  if (keyDown("down")){
    astronaut.addAnimation("legs",gym1);
    astronaut.changeAnimation("legs");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
  }
  if (keyDown("left")){
    astronaut.addAnimation("eat",eat);
    astronaut.changeAnimation("eat");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
  }
  if (keyDown("right")){
    astronaut.addAnimation("drink",drink);
    astronaut.changeAnimation("drink");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
  }
  if (keyDown("m")){
    astronaut.addAnimation("move",move);
    astronaut.changeAnimation("move");
    astronaut.y=350;
    astronaut.setVelocity(2,2);
  }
  if (keyDown("e")){
    astronaut.addAnimation("arms",gym2);
    astronaut.changeAnimation("arms");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
  }
  drawSprites();
  textSize(20);
  text ("Instructions",10,10);
  textSize(15)
  text("Up arrow for brushing",10,30);
  text("Down arrow for leg exercising", 10, 50);
  text("Left arrow for eating", 10, 70);
  text("Right arrow for drinking", 10, 90);
  text("'M' for moving", 10, 110);
  text("'E' for arm exercising", 10, 130);
}