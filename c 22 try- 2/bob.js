class Bob 
{
    constructor(x, y, r)
    {
        let options = 
        {
            restitution : 1,
		    density : 3
        }

        this.body = Matter.Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        ellipse(pos.x, pos.y, this.r);
    }

}