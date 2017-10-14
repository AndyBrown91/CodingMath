class Vector
{
    constructor (x, y)
    {
        //constructor    
        this.x = 1;
        this.y = 0;
    
        this.setX(x);
        this.setY(y);
    }
    
    setX (value)
    {
        this.x = value;  
    }
    
    getX ()
    {
        return this.x;
    }
    
    setY(value)
    {
        this.y = value;
    }
    
    getY ()
    {
        return this.y;
    }
    
    setAngle (angle)
    {
        var length = this.getLength();
        
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;        
    }
    
    getAngle()
    {
        return Math.atan2(this.y, this.x);
    }
    
    setLength (length)
    {
        var angle = this.getAngle();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }
    
    getLength ()
    {
        //Asquare + bsquare = csquare
        return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    
    add (v2)
    {
        return new Vector(this.x + v2.getX(), this.y + v2.getY());
    }
    
    addTo (v2)
    {
        this.x += v2.getX();
        this.y += v2.getY();
    }
    
    subtract (v2)
    {
        return new Vector(this.x - v2.getX(), this.y - v2.getY());
    }
    
    subtractFrom (v2)
    {
        this.x -= v2.getX();
        this.y -= v2.getY();
    }
    
    multiply (scalar) 
    {
        return new Vector(this.x * scalar, this.y * scalar);
    }
    
    multiplyBy (val)
    {
        this.x *= val;
        this.y *= val;
    }
    
    divide (scalar)
    {
        return new Vector(this.x / scalar, this.y / scalar);
    }
    
    divideBy (val){
        this.x /= val;
        this.y /= val;
    }
    
};