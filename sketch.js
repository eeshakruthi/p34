var dog, happyDog, database, foodS, foodStock
var dog_img, happyImg;
function preload()
{
	dog_img=loadImage("images/dogImg.png")
  happyImg=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  foodStock.set(20);
  dog=createSprite(250,350,10,60);
  dog.addImage(dog_img);
  dog.scale=0.2;
}


function draw() {  
background("teal");

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyImg);
}
  drawSprites();
  fill (255);
  text("Press Up Arrow to feed Drago Milk!",50,50)
  text("Food Remaining: "+foodS,150,150);

  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

