class Tree {
    constructor(x, y, width, height) {
      var options = {
        'isStatic':true  
       
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 400;
      this.height = height;
      this.image = loadImage("sprites/tree.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
        rectMode(CENTER)
      image(this.image, pos.x, pos.y, this.width, this.height);
   
    }
  };