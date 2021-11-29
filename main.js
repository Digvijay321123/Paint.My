var last_position_of_x, last_position_of_y;
color = "black"; 
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
 var width = screen.width;
 new_width = screen.width-70;
 new_height = screen.height-300;
 if(width<992)
 {
     document.getElementById("myCanvas").width = new_width;
     document.getElementById("myCanvas").height = new_height;
     document.body.style.overflow = "hidden";

 }
 canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e)
 {
     console.log("my_touch");
     color = document.getElementById("color").value;
     width_of_line = document.getElementById("width_of_line").value;
     MouseEvent = "mousedown"
     last_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
     last_position_of_y = e.touches[0].clientY-canvas.offsetTop;

 }
 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e)
 {
    console.log("my_mousemove");
    current_position_of_mouse_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    
    console.log("Last Position of X and Y Cordinates =");
    console.log("X =" +last_position_of_x+"Y ="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("Current Position of X and Y Cordinates =");
    console.log("X = "+current_position_of_touch_x+"Y ="+current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}
function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}