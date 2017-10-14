window.onload = function ()
{
    var canvas  = document.getElementById('canvas'),
        context = canvas.getContext("2d"),
        width   = canvas.width  = window.innerWidth,
        height  = canvas.height = window.innerHeight;
    
    var centreY     = height * .5,
        centreX     = width  * .5,
        radius      = 200,  // how far to move
        angle       = 0,
        numObjects  = 10,   //If we were working in degrees, it'd be easy 360 / numObjects, but we're in radians, see slice
        slice       = Math.PI * 2 / numObjects,
        x, y;

    // SPINNING AROUND A CIRCLE
    var spinAngle  = 0,
        stepAngle  = 5;
    
    render ();
    
    function render()
    {
        context.clearRect(0, 0, width, height);
        
        for (var i = 0; i < numObjects; i++)
        {
            angle = ((i * slice) + spinAngle) % (Math.PI * 2);

            x = centreX + Math.cos(angle) * radius;
            y = centreY + Math.sin(angle) * radius;

            context.beginPath();
            context.arc(x, y, 10, 0, Math.PI * 2, false);
            context.fill();
        }
        
        spinAngle += stepAngle;
        
        requestAnimationFrame(render);
    }

};

//  CIRCLE MOVES IN A CIRCLE
//    var centreY = height * .5,
//        centreX = width  * .5,
//        radius  = 200,  // how far to move
//        speed   = 0.1, //How much to increment angle
//        angle   = 0,
//        x, y;
//    
//    render();
//    
//    function render()
//    {
//        context.clearRect(0, 0, width, height);
//        
//        x = centreX + Math.cos(angle) * radius;
//        y = centreY + Math.sin(angle) * radius;
//        
//        context.beginPath();
//        context.arc(x, y, 10, 0, Math.PI * 2, false);
//        context.fill();
//        
//        angle += speed;
//        
//        requestAnimationFrame(render);
//    }

// ELIPTICAL MOTION
//    var centreY = height * .5,
//        centreX = width  * .5,
//        xRadius = 200,  // how far to move
//        yRadius = 400,
//        speed   = 0.1, //How much to increment angle
//        angle   = 0,
//        x, y;
//    
//    render();
//    
//    function render()
//    {
//        context.clearRect(0, 0, width, height);
//        
//        x = centreX + Math.cos(angle) * xRadius;
//        y = centreY + Math.sin(angle) * yRadius;
//        
//        context.beginPath();
//        context.arc(x, y, 10, 0, Math.PI * 2, false);
//        context.fill();
//        
//        angle += speed;
//        
//        requestAnimationFrame(render);
//    }

// LISSAJOUS CURVE, x and y angles moving at different speed (by different amounts each iteration)
//    var centreY = height * .5,
//        centreX = width  * .5,
//        xRadius = 200,  // how far to move
//        yRadius = 400,
//        xSpeed   = 0.1, //How much to increment angle
//        ySpeed   = 0.131, //How much to increment angle
//        xAngle   = 0,
//        yAngle   = 0,
//        x, y;
//    
//    render();
//    
//    function render()
//    {
//        context.clearRect(0, 0, width, height);
//        
//        x = centreX + Math.cos(xAngle) * xRadius;
//        y = centreY + Math.sin(yAngle) * yRadius;
//        
//        context.beginPath();
//        context.arc(x, y, 10, 0, Math.PI * 2, false);
//        context.fill();
//        
//        xAngle += xSpeed;
//        yAngle += ySpeed;
//        
//        requestAnimationFrame(render);
//    }

// DRAW CIRCLES IN A CIRCLE
//    var centreY     = height * .5,
//        centreX     = width  * .5,
//        radius      = 200,  // how far to move
//        angle       = 0,
//        numObjects  = 10,   //If we were working in degrees, it'd be easy 360 / numObjects, but we're in radians, see slice
//        slice       = Math.PI * 2 / numObjects,
//        x, y;
//
//    
//    for (var i = 0; i < numObjects; i++)
//    {
//        angle = i * slice;
//
//        x = centreX + Math.cos(angle) * radius;
//        y = centreY + Math.sin(angle) * radius;
//
//        context.beginPath();
//        context.arc(x, y, 10, 0, Math.PI * 2, false);
//        context.fill();
//    }