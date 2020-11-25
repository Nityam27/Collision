var moving_rect , fixed_rect ;
var object1, object2 , object3 ; 

function setup() {
  createCanvas(800,400);

  fixed_rect = createSprite(400, 200, 50, 50);
  fixed_rect.shapeColor = "yellow"

  moving_rect = createSprite(250,300,50,50);
  moving_rect.shapeColor = "yellow"

 object1 = createSprite(100,100,50,50);
 object1.shapeColor = "blue";

 object2 = createSprite(200,100,50,50);
 object2.shapeColor = "blue";

 object3 = createSprite(300,100,50,50);
 object3.shapeColor = "blue";
}

function draw() {
  background("black");  

  moving_rect.x = mouseX;
  moving_rect.y = mouseY;

  if(isTouching(moving_rect , object1)) {

    moving_rect.shapeColor = "red";
    object1.shapeColor = "red";
  }
  else{
    object1.shapeColor = "blue";
    moving_rect.shapeColor = "yellow";
  }
  drawSprites();
}

