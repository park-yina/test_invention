let ball;
function setup() {
  createCanvas(400, 400);
  ball=new Walker();
  
}


function draw() {
  background(220);
  ball.update();
  ball.display();
}
class Walker{
  constructor(){
    this.pos=createVector(width,height/2);
    this.vel=createVector(-0.7,0.4);
    this.acc=createVector(0,0);//처음 가속도는 0으로 세팅한다.
    this.w=8;
  }
   update(){
      if(this.pos.y>200){
        this.acc=createVector(0.3,-4);
      }
     if(this.pos.y<200){
       this.acc=createVector(-0.35,3);
     }
     if(this.pos.x>390){
       this.pos=createVector(this.pos.x-4,height/2);
     }
     this.vel.add(this.acc);
     this.pos.add(this.vel);
    }
  display(){
    ellipse(this.pos.x,this.pos.y,this.w);
  }
}