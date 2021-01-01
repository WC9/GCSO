var rect1, rect2;
var edges;




function setup() {
  createCanvas(800,800);
  rect1 = createSprite(300, 800, 70, 50);
  rect1.shapeColor = "green";
  rect1.velocityY=-3;
  rect1.velocityX=-2;


  rect2 = createSprite(800,10,50,100);
  rect2.shapeColor = "green";
  rect2.velocityY=5;
  rect2.velocityX=3;

  edges = createEdgeSprites();
    

}

function draw() {
  background(0); 
  
  rect1.bounceOff(edges);
  rect2.bounceOff(edges);

 
  //rect1.x = World.mouseX;
  //rect1.y = World.mouseY;

  if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 
    && 
    rect2.x-rect1.x<=rect1.width/2+rect2.width/2
    &&
    rect1.y-rect2.y<=rect1.height/2+rect2.height/2 
    && 
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2
    ){
    rect1.shapeColor="red";
    rect2.shapeColor="red";
  }
  else{
    rect1.shapeColor="green";
    rect2.shapeColor="green"; 
  }


  if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 
    && 
    rect2.x-rect1.x<=rect1.width/2+rect2.width/2
    &&
    rect1.y-rect2.y<=rect1.height/2+rect2.height/2 
    && 
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2
    ){

    rect1.velocityX = rect1.velocityX*(-1);
    rect2.velocityX = rect2.velocityX*(-1)
  }


  if(rect1.y-rect2.y<=rect1.height/2+rect2.height/2 
    && 
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2
    &&
    rect1.x-rect2.x<=rect1.width/2+rect2.width/2 
    && 
    rect2.x-rect1.x<=rect1.width/2+rect2.width/2
    ){

    rect1.velocityY = rect1.velocityY*(-1);
    rect2.velocityY = rect2.velocityY*(-1);
  }








  
  drawSprites();
}