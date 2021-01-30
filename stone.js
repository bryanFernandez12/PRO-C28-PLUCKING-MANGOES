class Stone {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':2.1
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius/2;
      this.image = loadImage("sprites/stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0, 0, this.radius*3, this.radius*3);
      pop();
    }
  };