var sleep, brush, gym1, gym2, drink, eat, move, bg, backg, astronaut
function preload() {
  backg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym1 = loadAnimation("gym1.png","gym2.png");
  gym2 = loadAnimation("gym11.png","gym12.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  move = loadAnimation("move.png","move1.png");
}
function setup() {
  createCanvas(600,400);
  bg = createSprite(300,200,800,400);
  bg.addImage("bg",backg);
  bg.scale=0.12;
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleep",sleep);
  astronaut.addAnimation("brush",brush);
  astronaut.addAnimation("legs",gym1);
  astronaut.addAnimation("eat",eat);
  astronaut.addAnimation("drink",drink);
  astronaut.addAnimation("move",move);
  astronaut.addAnimation("arms",gym2);
  edges = createEdgeSprites();
}
function draw() {
  fill("Blue");
  astronaut.bounceOff(edges);
  if (keyDown("up")){
    astronaut.changeAnimation("brush");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
  }
  if (keyDown("down")){
    astronaut.changeAnimation("legs");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
  }
  if (keyDown("left")){
    astronaut.changeAnimation("eat");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
  }
  if (keyDown("right")){
    astronaut.changeAnimation("drink");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
  }
  if (keyDown("m")){
    astronaut.changeAnimation("move");
    astronaut.y=350;
    astronaut.setVelocity(2,2);
  }
  if (keyDown("e")){
    astronaut.changeAnimation("arms");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
  }
  drawSprites();
  textSize(30);
  stroke("lightblue");
  strokeWeight(3);
  text ("Instructions",10,20);
  textSize(15);
  text("Up arrow for brushing",10,40);
  text("Down arrow for leg exercising", 10, 60);
  text("Left arrow for eating", 10, 80);
  text("Right arrow for drinking", 10, 100);
  text("'M' for moving", 10, 120);
  text("'E' for arm exercising", 10, 140);
}