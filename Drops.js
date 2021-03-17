class Drops{
    constructor(x,y){
        this.x=x;
        this.y=y;
        var options={
            friction:0.01,
            restiution:0.1,
            density:0.1
        }
        this.body=Bodies.circle(x,y,5,options);
        World.add(world,this.body);
        Matter.Body.setStatic(this.body,false);
    }
    display(){
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,5,5);
    }
    updateY(){
        if(this.body.position.y> height){
            Matter.Body.setPosition(this.body,{x:random(0,1200),y:random(0,600)});
        }
    }
}