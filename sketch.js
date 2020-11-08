//Create variables here
var dog_database, happyDog, database, foodS, foodStock;
var fedTime,lastFed;
var dogHappyImg

var dogImg

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogHappyImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();

  dog_database = createSprite(250,250,10,10);
  dog_database.addImage(dogImg);




  fill(255,255,254);
  textSize(15);

}


function draw() { 
  background(46,139,87);
  readFood();

  if(keyDown("up")){
    console.log("here")
    foodStock = foodStock -1;

    console.log(foodStock)
    //updateFoodStock(foodStock)
    dog_database.addImage(dogHappyImg);

  }

  /* fedTime = database.ref('FeedTime')
  fedTime.on("value",function(data){
    lastFed = data.val();

  });

  if(lastFed>12){
    text("Last Feed : "+lastFed%12 + "PM",350,30)
  }else if(lastFed===0){
    text("Last Feed:12 AM",350,30)
  }else{
    text("Last Feed :",lastFed +"AM",350,30);  
  
  }
  */

  drawSprites();
}

async function readFood(){

  await database.ref("food").on("value",(data)=>{
    foodStock = data.val();
    
  });


}

function updateFoodStock(item){
  console.log(item)

  database.ref("food").update({
    food: item   
  });

}



 
 




