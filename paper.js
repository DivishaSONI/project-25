class paper{
    constructor(x,y){
        var options= {
            isStatic:false,
            restitution:0.7,
            density:1.3,
            friction:0.5
        }
       this.body =Bodies.rectangle(x,y,50,50,options);
       this.width= 50;
       this.height= 50;
       World.add(world,this.body);
       
    }
    
    
    display() {
    var pos= this.body.position;
    pop();
    push();
    rectMode(CENTER);
     fill ("white");
    ellipse(pos.x,pos.y,50,50);
    
    }
    };
    
    