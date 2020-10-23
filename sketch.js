//Create variables here
var dog_database, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog_database = loadImage("images/doglmg.png");
  
}

function setup() {
  createCanvas(500,500);
  dog_database = createSprite(250,250,10,10);
  dog_database.addImage("images/doglmg.png");

  dog_database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock)

  
}


function draw() { 
  background(46,139,87); 

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
}

  drawSprites();
  //add styles here

}



