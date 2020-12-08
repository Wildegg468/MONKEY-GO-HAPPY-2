var PLAY;
var END;

var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var back, backImage;
var FoodGroup, obstacleGroup;
var score;
var gs;

function preload() {


  monkey_running =
    loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png",
      "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png",
      "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backImage = loadImage("jungle.jpg");

  obstacleGroup = createGroup();
  FoodGroup = createGroup();

}



function setup() {
  createCanvas(windowWidth, windowHeight);

  ground = createSprite(400, windowHeight - 100, 900, 10);
  ground.visible = false;

 back = createSprite(400, 200, 4, 4);
 back.addImage(backImage);
back.scale = 1.8;


  monkey = createSprite(80, windowHeight - 100, 200, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  gs = PLAY;
  score = 1;
  banana.scale = 0.01;
  //obstacleGroup.setCollider("circle",0,0,40);
  //why does this ^ not work
  //              |  
  //monkey.debug = true;  
}


function draw() {
  background("skyblue");




  if (gs === PLAY) {
    back.velocityX = -5;

    if (touches,  keyDown("space") && monkey.y > 300) {
      monkey.velocityY = -16;
    }

    if (FoodGroup.isTouching(monkey)) {
      score = score + 1;
      FoodGroup.destroyEach();
    }
    if (obstacleGroup.isTouching(monkey)) {
      obstacleGroup.destroyEach();
      score = score + 2;
      monkey.scale = 0.1;
    }
  }

  switch (score) {
    case 10: monkey.scale = 0.12;
      break;
    case 20: monkey.scale = 0.14;
      break;

    case 30: monkey.scale = 0.16;
      break;

    case 40: monkey.scale = 0.18;
      break;
    default: break;
  }







stroke("white");
textSize(20);
fill("white");
text("score: " + score, windowHeight + 400, windowWidth + 400);

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);


  back.x = back.width / 2;


  banana();
  obstacle();

  drawSprites()
}

function banana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(windowWidth, random(120 + 50, 200 + 50), 20, 20);
    banana.velocityX = -5;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    FoodGroup.add(banana);
  }
}

function obstacle() {
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(windowWidth,windowHeight - 135, 40, 40);
    obstacle.velocityX = -5;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;

    obstacleGroup.add(obstacle);
  }


}







