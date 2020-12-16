class Basebox {
    
    constructor(x,y,width,height,angle){
    var  options={
    isStatic:false,
    'restitusion':0.5,
    'density':0.1,
    'friction':1
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    
    World.add(world,this.body);
    
    }
    display(){
            
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        fill ("blue");
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
        
        
    
        }
        }