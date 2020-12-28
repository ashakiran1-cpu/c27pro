class Rope {
    constructor(body1,body2,xoffset){
        var option={
            bodyA:body1,
            bodyB:body2,
            //stiffness:1,
            //length:50
            pointB:{x:xoffset,y:0}
        }
        this.xoffset=xoffset;
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
    }
    display(){
        strokeWeight(5)
        stroke("white")
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        line(pointA.x,pointA.y,pointB.x+this.xoffset,pointB.y)
    }
}