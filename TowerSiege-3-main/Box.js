class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("wood1.png");
      this.Visiblity = 255;
    }
    display(){
      var pos =this.body.position;
     
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);

      if(this.body.speed>15){

     this.body.position.x = 15055
      push()
      this.visiblity -=10
       tint(0,this.visiblity)
       image(this.image,this.body.position.x,this.body.position.y,50,50)
       pop()


      }

  
    }

    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }

  };
