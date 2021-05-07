class Particle{
    constructor(x,y){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
                isStatic:false
        } 
        
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r,options);
        this.color=color(random(0,255), random(0,255),random(0,255));
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill(this.color,0,255,255);//lets goooo I got it without the help of hint
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();     //i can't see the code for the hint thingy so i improvise
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop(); 
        
    }
};