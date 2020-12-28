class Bob{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{friction:0.5})
        this.radius=radius;
        World.add(world,this.body)
    }

    display(){
        var pos= this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}