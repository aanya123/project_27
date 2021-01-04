class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution :1.0,
            friction:0,
            density :0.8
            
        }
        this.radius = radius;
      
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,(this.radius),options)
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        strokeWeight(4)
        stroke("black")
        fill(255,0,255)
       // rectMode(CENTER)
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop();
        
    }
};