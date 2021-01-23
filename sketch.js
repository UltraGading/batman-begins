const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var raindrops = []
var umbrella, engine, world, lightning, lightningImg1, lightningImg2, lightningImg3, lightningImg4
var millisecond

function preload(){
lightningImg1 = loadImage('images/thunderbolt/1.png')
lightningImg2 = loadImage('images/thunderbolt/2.png')
lightningImg3 = loadImage('images/thunderbolt/3.png')
lightningImg4 = loadImage('images/thunderbolt/4.png')
}

function setup(){
engine = Engine.create()
world = engine.world
createCanvas(1366,768)
console.log(displayWidth, displayHeight)
umbrella = new Umbrella(180, 690, 225) 
}

function draw(){
background(0)
umbrella.display(); 
if(frameCount % 1 === 0){
var raindrop = new Drops(random(0, windowWidth), -100,10);
raindrops.push(raindrop);
}
for(var i = 0; i < raindrops.length; i++){
raindrops[i].fall(40);
raindrops[i].velocityY++
raindrops[i].display();
millisecond = round(millis())
thunderbolt();
} 
} 

function thunderbolt(){
if(millisecond%5000 == 0){
lightning = createSprite(318,78,1,1)
lightning.x = random(40,1326)
lightning.y = random(40,1326)
var rand =random(1,4)
switch(rand){
    case 1: lightning.addImage(lightningImg1)
    break;
    case 2: lightning.addImage(lightningImg2)
    break;
    case 3: lightning.addImage(lightningImg3)
    break;
    case 4: lightning.addImage(lightningImg4)
    break;
    default: break;
}
lightning.lifetime = 10;
}
}