$(document).ready(function (){

    // canvas variables
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var width=canvas.width;
    var height=canvas.height;

    var cellSize = 15
    var initialLength = 5;
    var snake = [];

    var initDirectionX = 0;
    var initDirectionY = -1;

    function init() {
        var x = c.width / 2;
        var y = c.height / 2;
        for (var i = 0; i < initialLength; i++) {
            addSnakeCell(x, y)
            y += cellSize;
        }

        requestAnimationFrame(move);
    }
    init();

    function addSnakeCell(x, y){
        var cell = {
            x: x,
            y: y,
            width: cellSize,
            height: cellSize,
            directionX: initDirectionX,
            directionY: initDirectionY,
        };
        snake.push(cell);
    }


    function draw(){
        ctx.clearRect(0, 0, width, height);
        for(var i=0;i<snake.length;i++){
            var r=snake[i];
            ctx.fillStyle = 'red'
            ctx.fillRect(r.x, r.y, cellSize, cellSize);
            ctx.lineWidth = 2;
            ctx.strokeStyle= 'white';
            ctx.strokeRect(r.x,r.y,r.width,r.height);
        }
    }

    function move(time){
        for(var i=0;i<snake.length;i++){
            snake[i].x += snake[i].directionX;
            snake[i].y += snake[i].directionY;
        }

        draw();

        requestAnimationFrame(move);
    }


});