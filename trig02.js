window.onload = function ()
{
    var canvas  = document.getElementById('canvas'),
        context = canvas.getContext("2d"),
        width   = canvas.width  = window.innerWidth,
        height  = canvas.height = window.innerHeight;
    
    var centreY     = height * .5,
        centreX     = width  * .5,
        baseAlpha   = 0.5,
        offset      = 0.5,  // how far to move
        speed       = 0.2, // how much to increment angle
        angle       = 0;
    
    render();
    
    function render ()
    {
        var alpha = baseAlpha + Math.sin(angle) * offset;
        
        context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
        
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centreX, centreY, 100, 0, Math.PI * 2, false);
        context.fill();
        
        angle += speed;
        
        requestAnimationFrame(render);
    }
};


// MOVING BALL
//    var centreY = height * .5,
//        centreX = width  * .5,
//        offset  = height * .4, // how far to move
//        speed   = 0.2,         //How much to increment angle
//        angle   = 0;
//    
//    render();
//    
//    function render ()
//    {
//        var y = centreY + Math.sin(angle) * offset;
//        
//        context.clearRect(0, 0, width, height);
//        context.beginPath();
//        
//        context.arc(centreX, y, 50, 0, Math.PI * 2, false);
//        context.fill();
//        
//        angle += speed;
//        
//        requestAnimationFrame(render);
//    }

// GROWING AND SHRINKING CIRCLE
//    var centreY     = height * .5,
//        centreX     = width  * .5,
//        baseRadius  = 100,
//        offset      = 50,  // how far to move
//        speed       = 0.2, // how much to increment angle
//        angle       = 0;
//    
//    render();
//    
//    function render ()
//    {
//        var radius = centreY + Math.sin(angle) * offset;
//        
//        context.clearRect(0, 0, width, height);
//        context.beginPath();
//        
//        context.arc(centreX, centreY, radius, 0, Math.PI * 2, false);
//        context.fill();
//        
//        angle += speed;
//        
//        requestAnimationFrame(render);
//    }

// FADING CIRCLE
//    var centreY     = height * .5,
//        centreX     = width  * .5,
//        baseAlpha   = 0.5,
//        offset      = 0.5,  // how far to move
//        speed       = 0.2, // how much to increment angle
//        angle       = 0;
//    
//    render();
//    
//    function render ()
//    {
//        var alpha = baseAlpha + Math.sin(angle) * offset;
//        
//        context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
//        
//        context.clearRect(0, 0, width, height);
//        context.beginPath();
//        context.arc(centreX, centreY, 100, 0, Math.PI * 2, false);
//        context.fill();
//        
//        angle += speed;
//        
//        requestAnimationFrame(render);
//    }