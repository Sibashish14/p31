class Boy{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        var options ={
            isStatic:true
        }
        this.image = loadImage("images/walking_1.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}