class Drops{
constructor(x,y,radius){
this.body = Bodies.circle(x,y,radius);
//World.add(this.body)
this.radius = radius;
this.x = x;
this.y = y;
this.velocityY  = random(2,5);
}

fall(speed){
this.y +=speed;
}
  
display(){
push();
stroke("blue");
fill("blue");
ellipse(this.x, this.y, this.radius);
pop();
}
}