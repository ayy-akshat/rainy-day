class CircleGround
{
    constructor(x, y, radius)
    {
        var bodyOptions=
        {
            friction:1,
            frictionStatic:1,
            density:1,
            isStatic:true
        }
        
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,bodyOptions);
        World.add(world,this.body);
    }

    display(color)
    {
        push();
        strokeWeight(0);
        translate(this.body.position.x, this.body.position.y);
        fill(color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}