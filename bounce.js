window.onload = function ()
{
    var canvas  = document.getElementById('canvas'),
        context = canvas.getContext("2d"),
        width   = canvas.width  = window.innerWidth,
        height  = canvas.height = window.innerHeight;
    
    var p = new Particle(width / 2, height / 2, 10, Math.random() * Math.PI * 2);
    p.radius = 40;
    
    update();
    
    function update()
    {
        context.clearRect(0, 0, width, height);
        
        //Update particle position
        p.update();

        //Draw sun/planet
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
        context.fill();

        if (p.position.getX() + p.radius > width)
        {
            //Put particle at the edge and changes the velocity's X direction
            p.position.setX(width - p.radius);
            p.velocity.setX(p.velocity.getX() * -1);
        }
        
        if (p.position.getX() - p.radius < 0)
        {
            p.position.setX(p.radius);
            p.velocity.setX(p.velocity.getX() * -1);
        }
        
        if (p.position.getY() + p.radius > height)
        {
            p.position.setY(height - p.radius);
            p.velocity.setY(p.velocity.getY() * -1);
        }
        
        if (p.position.getY() - p.radius < 0)
        {
            p.position.setY(p.radius);
            p.velocity.setY(p.velocity.getY() * -1);
        }
        
        
                
        requestAnimationFrame(update);
    }
};