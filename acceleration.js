window.onload = function ()
{
    var canvas  = document.getElementById('canvas'),
        context = canvas.getContext("2d"),
        width   = canvas.width  = window.innerWidth,
        height  = canvas.height = window.innerHeight;
    
    var ship = new Particle(width / 2, height/2, 0, 0),
        thrust = new Vector(0,0),
        angle = 0,
        turningLeft = false,
        turningRight = false,
        thrusting = false;
    
    var bullets = [];
    
    update();
    
    document.body.addEventListener("keydown", function (event) {
        switch (event.keyCode){    
            case 32:
                bullets.push(new Particle(ship.position.getX(), ship.position.getY(), 1, angle));
                break;
                
            case 38: // up
                thrusting = true;
                break;

            case 37: // left
                turningLeft = true;
                break;
            
            case 39: // right
                turningRight = true;
                break;    
                
            default: 
                break;
        }
    });
    
    document.body.addEventListener("keyup", function (event) {
        switch (event.keyCode){
            case 38: // up
                thrusting = false;
                break;

            case 37: // left
                turningLeft = false;
                break;
            
            case 39: // right
                turningRight = false;
                break;    
                
            default: 
                break;
        }
    });
    
    
    function update()
    {
        context.clearRect(0, 0, width, height);
        
        if (turningLeft)
            angle -= -0.05;
        
        if (turningRight)
            angle += -0.05; 
        
        thrust.setAngle(angle);
        
        if (thrusting)
            thrust.setLength(0.01);
        else
            thrust.setLength(0);
        
        ship.accelerate(thrust);
        ship.update();
        
        for (var i = 0; i < bullets.length; i++)
        {
            var b = bullets[i];
            b.update();
            
            if (b.position.getX() < 0 || b.position.getX() > width ||
                b.position.getY() < 0 || b.position.getY() > height)
            {
                //Bullet off screen remove it
                bullets.splice(i, 1);
                break;
            }

            context.beginPath();
            context.arc(b.position.getX(), b.position.getY(), 2, 0, Math.PI * 2, false);
            context.fill();
        }
        //Shift canvas by angle
        context.save();
        context.translate(ship.position.getX(), ship.position.getY());
        context.rotate(angle);
        
        //draw ship
        context.beginPath();
        context.moveTo(10, 0);
        context.lineTo(-10, -7);
        context.lineTo(-10, 7);
        context.lineTo(10, 0);
        
        //Draw a line to show thrust
        if (thrusting)
        {
            context.moveTo(-10, 0);
            context.lineTo(-18, 0);
        }
        
        context.stroke();
        
        context.restore();
        

    
         
        //Wrap around the edges of the screen
        if (ship.position.getX() > width)
            ship.position.setX(0);
        if (ship.position.getX() < 0)
            ship.position.setX(width);
        
        if (ship.position.getY() > height)
            ship.position.setY(0);
        if (ship.position.getY() < 0)
            ship.position.setY(height);
        
        
        requestAnimationFrame(update);
    }
};


// MOVING BALL ACCELERATING DOWNWARDS AND TO THE RIGHT
//    var p = particle.create(100, height, 10, -Math.PI/2),
//        accel = vector.create(0.1, 0.1);
//    
//    update();
//    
//    function update()
//    {
//        context.clearRect(0, 0, width, height);
//        
//        p.accelerate(accel);
//        p.update();
//
//        context.beginPath();
//        context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
//        context.fill();
//        
//        requestAnimationFrame(update);
//    }

//FIREWORKS EXAMPLE - USING GRAVITY
//    var particles = [],
//        numParticles = 10;
//    
//    for (var i = 0; i < numParticles; i++)
//        particles.push(particle.create(width/2, height/3, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1));
//    
//    update();
//    
//    function update()
//    {
//        context.clearRect(0, 0, width, height);
//        
//        for (var i = 0; i < numParticles; i++)
//        {
//            var p = particles[i];
//            p.update();
//        
//            context.beginPath();
//            context.arc(p.position.getX(), p.position.getY(), 4, 0, Math.PI * 2, false);
//            context.fill();
//        }
//        
//        requestAnimationFrame(update);
//    }

// ARROW KEY CONTROLLED CIRCLE WITH ACCELERATION
//    var ship = particle.create(width / 2, height, 0, 0),
//        thrust = vector.create(0,0);
//    
//    update();
//    
//    document.body.addEventListener("keydown", function (event) {
//        switch (event.keyCode){
//            case 38: // up
//                thrust.setY(-0.1);
//                break;
//            
//            case 40: // down
//                thrust.setY(0.1);
//                break;
//                
//            case 37: // left
//                thrust.setX(-0.1);
//                break;
//            
//            case 39: // right
//                thrust.setX(0.1);
//                break;    
//                
//            default: 
//                break;
//        }
//    });
//    
//    document.body.addEventListener("keyup", function (event) {
//        switch (event.keyCode){
//            case 38: // up
//                thrust.setY(0);
//                break;
//            
//            case 40: // down
//                thrust.setY(0);
//                break;
//                
//            case 37: // left
//                thrust.setX(0);
//                break;
//            
//            case 39: // right
//                thrust.setX(0);
//                break;    
//                
//            default: 
//                break;
//        }
//    });
//    
//    
//    function update()
//    {
//        context.clearRect(0, 0, width, height);
//        
//        ship.accelerate(thrust);
//        ship.update();
//        
//        context.beginPath();
//        context.arc(ship.position.getX(), ship.position.getY(), 10, 0, Math.PI * 2, false);
//        context.fill();
//         
//        //Wrap around the edges of the screen
//        if (ship.position.getX() > width)
//            ship.position.setX(0);
//        if (ship.position.getX() < 0)
//            ship.position.setX(width);
//        
//        if (ship.position.getY() > height)
//            ship.position.setY(0);
//        if (ship.position.getY() < 0)
//            ship.position.setY(height);
//        
//        
//        requestAnimationFrame(update);
//    }