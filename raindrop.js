class Raindrop
{
    constructor(x, y, radius)
    {
        var bodyOptions=
        {
            restitution:0.3,
            frictionAir:0,
            friction:1,
            frictionStatic:1,
            density:1
        }

        this.initialX = x;
        this.initialY = y;
        
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,bodyOptions);
        World.add(world,this.body);

        this.lifetime = 100;
    }

    display()
    {
        push();
        strokeWeight(0);
        ellipseMode(RADIUS);
        fill("skyblue");
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();

        this.lifetime--;
    }
}