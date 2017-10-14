window.onload = function ()
{
    var canvas  = document.getElementById('canvas'),
        context = canvas.getContext("2d"),
        width   = canvas.width  = window.innerWidth,
        height  = canvas.height = window.innerHeight;
    
//NATURAL WRAPPING BASED ON THE PARTICLE RADIUS
    //Particle with small velocity moving in a random direction
    var p = new Particle(width / 2, height / 2, 3, Math.random() * Math.PI * 2);
    p.radius = 50;
    
    update();
    
    function update()
    {
        context.clearRect(0, 0, width, height);

        p.update();
        
        //Draw sun/planet
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
        context.fill();
        
        //Wrap
        if (p.position.getX() - p.radius > width)
            p.position.setX(-p.radius);
        if (p.position.getX() + p.radius < 0)
            p.position.setX(width + p.radius);
        if (p.position.getY() - p.radius > height)
            p.position.setY(-p.radius);
        if (p.position.getY() + p.radius < 0)
            p.position.setY(height);
        
        
        requestAnimationFrame(update);
    }
};


