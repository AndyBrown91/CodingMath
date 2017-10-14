window.onload = function ()
{
    var canvas  = document.getElementById('canvas'),
        context = canvas.getContext("2d"),
        width   = canvas.width  = window.innerWidth,
        height  = canvas.height = window.innerHeight;
    
    var arrowX = width/2,
        arrowY = height/2,
        dx, dy,
        angle = 0;
    
    render();
    
    function render(){
        context.clearRect(0, 0, width, height);
        
        //Tranforms the context by our angle, so the arrow itself is always at a right angle
        //But the context which contains the arrow is spun
        //This is easier than calculating the points for the arrow to be draw
        context.save();
        context.translate(arrowX, arrowY);
        context.rotate(angle);
        
        //Draw the arrow
        context.beginPath();
        context.moveTo(20, 0);
        context.lineTo(-20, 0);
        context.moveTo(20, 0);
        context.lineTo(10, -10);
        context.moveTo(20, 0);
        context.lineTo(10, 10);
        context.stroke();
        
        context.restore();
        
        requestAnimationFrame(render);
    }
    
    //Listen for when the mouse moves, get its position and calculate the angle
    document.body.addEventListener("mousemove", function (event){
        //Since we've removed all padding around the canvas, our coordinates are the same, otherwise you'd need to
        //handle the padding in the calculations
        dx = event.clientX - arrowX;
        dy = event.clientY - arrowY;
        
        //atan2 takes separate arguments, so does know which is negative and which is positive
        angle = Math.atan2 (dy, dx);
    });
    
};


//Since you only give it the ratio between the lengths, it doesn't know which values are positive or negative therefore
//only returns angles in the right hand quadrant, doesn't point to mouse if it is to the left
//    //Listen for when the mouse moves, get its position and calculate the angle
//    document.body.addEventListener("mousemove", function (event){
//        //Since we've removed all padding around the canvas, our coordinates are the same, otherwise you'd need to
//        //handle the padding in the calculations
//        dx = event.clientX - arrowX;
//        dy = event.clientY - arrowY;
//        
//        angle = Math.atan(dy / dx);
//        
//    });