var jaxonrunnig,jaxon
var path,pathimage

function preload(){
  //pre-load images

  jaxonrunning= loadAnimation("Runner-1.png","Runner-2.png");
  pathimage = loadImage("path.png")



}

function setup(){
  createCanvas(400,400);
  //create sprites here
  jaxon = createSprite(50,160,20,50);
  jaxon.addAnimation("path", pathimage );
  jaxon.scale = 0.5;
    //creating path
  path= createSprite(200,200);
  path.addImage("pathimage");
  path.velocityY = 4
  path.scale= 1.2;}
 
function draw() {
  background(0);

 //  if condition to reset the background
if(path.y>=400) {
  path.y= path.height/2
}

jaxon.x=mouse.x










drawSprites()
}
