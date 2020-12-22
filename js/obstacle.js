class Obstacle{
    constructor(x,y,w,h){
        
    var options ={
        density:1.0,
        isStatic:true
    }
    
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world,this.body);
    
    }
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("blue");
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
    }
   delete(){
    
    World.remove(world,this.body);
   } 
    }





