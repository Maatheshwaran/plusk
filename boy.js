class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/boy.png");
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
