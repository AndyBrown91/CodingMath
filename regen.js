window.onload = function ()
{
    var canvas  = document.getElementById('canvas'),
        context = canvas.getContext("2d"),
        width   = canvas.width  = window.innerWidth,
        height  = canvas.height = window.innerHeight;
    
    var particles = [];
    
    for (var i = 0; i < 100; i++)
    {
        var p = new Particle(width / 2, height , Math.random() * 8 + 5, -Math.PI / 2 + (Math.random() * .2 - .1), 0.1);
        p.radius = Math.random() * 10 + 2;
        particles.push(p);
    }
    
    
    update();
    
    function update()
    {
        context.clearRect(0, 0, width, height);
        
        for (var index in particles)
        {
            var p = particles[index];
            
            //Update particle position
            p.update();
        
            //Draw sun/planet
            context.beginPath();
            context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
            context.fill();

            //Since we know particles will always come down (due to gravity), only check about particles crossing the bottom edge
            if (p.position.getY() - p.radius > height)
            {
                //Put particle back to emitter
                p.position.setX(width / 2);
                p.position.setY(height);
                p.velocity.setLength(Math.random() * 8 + 5);
                p.velocity.setAngle(-Math.PI / 2 + (Math.random() * .2 - .1));
            }
        }
                
        requestAnimationFrame(update);
    }
};