const
Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint;

var engine, world;

var ground;

var umbrella;

var raindrops = [];

var personImg;

var lightnings = [];

var currentLightning;

var lightningTime;

var lightningX, lightningSize;

function preload()
{
    personImg = loadImage('person.png');

    lightnings.push(loadImage('lightning1.png'), loadImage('lightning2.png'), loadImage('lightning3.png'));
}

function setup()
{
    createCanvas(800, 800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400, 800, 800, 88);

    umbrella = new CircleGround(410, 520, 80);

    world.gravity = {x:0, y:0.2};

    Engine.run(engine);

    lightningX = 0;
}

function draw()
{
    background(25);
    ground.display('brown');

    imageMode(CENTER);
    image(personImg, 400, 600, 160, 320);

    raindrops.push(new Raindrop(random(20, width-20), -30, 2));
    raindrops.push(new Raindrop(random(20, width-20), -30, 2));
    raindrops.push(new Raindrop(random(20, width-20), -30, 2));
    
    for (var i = 0; i < raindrops.length; i++)
    {
        if (raindrops[i].lifetime <= 0)
        {
            World.remove(world, raindrops[i].body);
            delete raindrops[i];
            raindrops.splice(i, 1);
            i--;
        }
        else
        {
            raindrops[i].display();
        }
    }

    spawnLightning();
    showLightning();
}

function spawnLightning()
{
    if (frameCount % 90 == 0)
    {
        lightningTime = 15;
        currentLightning = Math.round(random(0,2));

        lightningX = random(0, width-400);
        lightningSize = random(70, 350);
    }
}

function showLightning()
{
    if (lightningTime > 0)
    {
        lightningTime--;
        imageMode(CORNER);
        image(lightnings[currentLightning], lightningX, 0, lightningSize, lightningSize);
    }
}