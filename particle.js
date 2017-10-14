class Particle
{
    constructor (x, y, speed, direction, gravity)
    {
        this.position = new Vector(x, y);
        this.velocity = new Vector(0, 0);
        
        this.mass = 1;
        this.radius = 0;
        
        this.velocity.setLength(speed);
        this.velocity.setAngle(direction);
        
        this.gravity = new Vector(0, gravity || 0);
    }
        
    update()
    {
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    }

    accelerate(accel)
    {
        this.velocity.addTo(accel);
    }
    
    angleTo(particle2)
    {
        return Math.atan2(particle2.position.getY() - this.position.getY(), particle2.position.getX() - this.position.getX());
    }
    
    distanceTo (p2)
    {
        var dX = p2.position.getX() - this.position.getX(),
            dY = p2.position.getY() - this.position.getY();
        
        return Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
    }
    
    gravitateTo (p2)
    {
        var grav = new Vector(0, 0),
            dist = this.distanceTo(p2);
        
        grav.setLength(p2.mass / (dist * dist));
        grav.setAngle(this.angleTo(p2));
        
        this.velocity.addTo(grav);
    }
};