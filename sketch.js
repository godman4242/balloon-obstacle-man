var bg,bgimg
var balloon,balloonimg
var top,down
var obstop1,obstop2,obstop
var obsbot1,obsbot2,obsbot3,obsbot

function preload(){
  bgimg = loadImage('assets/bg.png')
  balloonimg = loadAnimation('assets/balloon1.png','assets/balloon2.png','assets/balloon3.png')

  obstop1 = loadImage('assets/obsTop1.png')
  obstop2 = loadImage('assets/obsTop2.png')

  obsbot1 = loadImage('assets/obsBottom1.png')
  obsbot2 = loadImage('assets/obsBottom2.png')
  obsbot3 = loadImage('assets/obsBottom3.png')


}

function setup(){
  bg = createSprite(165,485,1,1)
  bg.addImage(bgimg)
  bg.scale = 1.3

  bottom = createSprite(200,390,800,20)
bottom.visible = false

top = createSprite(200,10,800,20)
top.visible = false


balloon= createSprite(100,200,20,50)
balloon.addAnimation('balloon',balloonimg)
balloon.scale = 0.2
}

function draw(){
  background('black')
  if(keyDown('space')){
    balloon.velocityY = -10
  }

  
  balloon.velocityY = balloon.velocityY + 0.5
  Bar()
  drawSprites();

  spawnobstaclestop();
}

function spawnobstaclestop(){

if(frameCount%60 === 0){

obstop = createSprite(400,50,40,50)
obstop.scale = 0.1
obstop.velocityX = -4
obstop.y = Math.round(random(10,100))
var rand = Math.round(random(1,2))

switch(rand){
  case 1: obstop.addImage(obstop1)
  break;

  case 2: obstop.addImage(obstop2)
  break;

  default:break;


}

obstop.lifetime = 100
balloon.depth = balloon.depth + 1
}

}

function Bar(){
if(frameCount%60 === 0){
var bar = createSprite(400,200,10,800)
bar.velocityX = -6
bar.depth = balloon.depth
bar.lifetime = 70
bar.visible = false


}

}