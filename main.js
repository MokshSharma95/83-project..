canvas =
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "black";
width_of_line = 2;
var width=screen.width;
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle - color;
    ctx.lineWidth - width_of-line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, last_position_of_touch_y)
    ctx.stroke();

    last_position_of_touch_x = current_position_of_mouse_x;
    last_position_of_touch_y = current_position_of_mouse_y;
}

canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    beginPath = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(){
    beginPath = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(){
    beginPath = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (beginPath == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_x;
}

canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(){
    last_position_of_touch_x = current_position_of_mouse_x;
    last_position_of_touch_y = current_position_of_mouse_y;
}