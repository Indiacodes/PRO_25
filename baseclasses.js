class Baseclass{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':0.1
        }
        this.body = Bodies.circle(x, y, width, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}