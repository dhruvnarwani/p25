class Paper {
constructor(x, y, radius){
    var options= {
        isStatic : true,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }
    this.body = Matter.Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
}
 display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);

    fill(255);
    stroke("blue");
    strokeWeight(4);
    
    pop();
}
}