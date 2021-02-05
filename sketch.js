var cat,catImage,tomone,tomtwo,tomthree;

var mouse,mouseImage,jerryone,jerrytwo,jerrythree,jerryfour;

var bg;
function preload() {
  
    catImage = loadImage("images/tomOne.png");
    mouseImage = loadImage("images/jerryOne.png");
    tomone = loadAnimation("Images/tomOne.png");
    tomtwo = loadAnimation("images/tomTwo.png");
    tomthree = loadAnimation("images/tomThree.png");
    jerryone = loadAnimation("images/jerryOne.png");
    jerrytwo = loadAnimation("images/jerryTwo.png");
    jerrythree = loadAnimation("images/jerryThree.png");
    jerryfour = loadAnimation("images/jerryFour.png");
    
    bg=loadImage("images/garden.png");


}

function setup(){
    createCanvas(800,700);
    cat = createSprite(500,500,100,50);
    cat.addImage("cat",catImage);
    cat.scale=0.2;

   
    
    mouse = createSprite(600,400,190,50)
    mouse.addImage("mouse",mouseImage);
    mouse.scale=0.2;
}

function draw() {
 background(bg);
 cat.addAnimation("catimage",tomthree)   

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",tomtwo);
      cat.changeAnimation("catRunning");
      
      mouse.addAnimation("mouseteasing",mousetwo)
      mouse.changeAnimation("mouseteasing");
  }

  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX = 0;
      cat.addAnimation("catImage",catImag3);
      cat.changeAnimation("catImage");
  }


}
