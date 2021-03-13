class Ground
{
    constructor(x, y, width, height)
    {
        var bodyOptions=
        {
            friction:1,
            frictionStatic:1,
            density:1,
            isStatic:true
        }
        
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,bodyOptions);
        World.add(world,this.body);
    }

    display(color)
    {
        rectMode(CENTER);

        var angle = this.body.angle;
        push();
        strokeWeight(0);
        translate(this.body.position.x, this.body.position.y);
        fill(color);
        rect(0, 0, this.width, this.height);
        pop();
    }
}