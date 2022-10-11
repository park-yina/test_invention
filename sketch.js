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
    this.pos=createVector(width,height);
    this.vel=createVector(-0.3,0.2);
    this.acc=createVector(0,0);//처음 가속도는 0으로 세팅한다.
    this.w=4;
  }
   update(){
      if(this.pos.y>200){
        this.acc=createVector(0.01,-0.5);
      }
     if(this.pos.y<200){
       this.acc=createVector(-0.04,0.5);
     }
     this.vel.add(this.acc);
     this.pos.add(this.vel);
    }
  display(){
    ellipse(this.pos.x,this.pos.y,this.w);
  }
}