class Bin extends Baseclass{
    constructor(x, y){

        super(x, y, 50,50);
        this.image = loadImage("sprites/dustbingreen.png");

        this.bodyBottom = Bodies.rectangle(580, 680,100,10);
        this.bodyLeft = Bodies.rectangle(530,645,10,80);
        this.bodyRight = Bodies.rectangle(635, 645, 10, 80);
        this.newBody = Bodies.rectangle(580, 650, 10,10);
        this.image = loadImage("sprites/dustbingreen.png");
        
        World.add(world, this.bodyBottom);
        World.add(world, this.bodyRight);
        World.add(world, this.bodyLeft);
    }

    showBin(){
        rectMode(CENTER);
        rect(this.bodyBottom.position.x, this.bodyBottom.position.y, 110, 10);
        rect(this.bodyLeft.position.x, this.bodyLeft.position.y, 10, 80);
        rect(this.bodyRight.position.x, this.bodyRight.position.y, 10, 80);
        
    }
}