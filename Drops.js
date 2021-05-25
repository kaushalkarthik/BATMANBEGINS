class createDrop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.5          
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 6;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,520), y:random(0,520)})
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}