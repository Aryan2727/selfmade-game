class Ground {
    constructor(x, y, width, height, angle) {
        var options = {
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/ground.png");
        World.add(world, this.body);
      }
      display(){

        imageMode(CENTER);
        image(this.image, 0, this.width, this.height);

      }
      
}