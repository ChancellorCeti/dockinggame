var spacebg,spacecraft1,spacecraft2,spacecraft3,spacecraft4,iss_img;
var iss;
var spacecraft;
var hasDocked=false;
function preload(){
  spacebg=loadImage("spacebg.jpg")
  spacecraft1=loadImage("spacecraft1.png")
spacecraft2=loadImage("spacecraft2.png")
spacecraft3=loadImage("spacecraft3.png")
spacecraft4=loadImage("spacecraft4.png")
iss_img=loadImage("iss.png");




}
function setup() {
  createCanvas(1200,800);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(iss_img,"iss_pic");
  iss.scale=0.5;
  spacecraft=createSprite(10,10);
  spacecraft.scale=0.3;
  spacecraft.addImage(spacecraft1,"spacecraft_pic1");
  if(!hasDocked){
    spacecraft.x=random(200,1000);
    spacecraft.y=random(200,600);
  }
}

function draw() {
  background(spacebg); 
  if(!hasDocked){
    console.log(spacecraft.x+"x");
    console.log(spacecraft.y +"y");
    if(keyDown("LEFT_ARROW")){
      spacecraft.x-=1;
      spacecraft.changeImage("spacecraft3",spacecraft3);
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x+=1;
      spacecraft.changeImage("spacecraft4",spacecraft4);
    }
    if(keyDown("UP_ARROW")){
      spacecraft.y-=1;
      
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y+=1;
      spacecraft.changeImage("spacecraft2",spacecraft2);
    }
  }
  if(spacecraft.x===371 && spacecraft.y===267){
    hasDocked=true;
    text("Docking Successful!", 400,300)
  }
  drawSprites();
}