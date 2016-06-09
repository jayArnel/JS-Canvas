$(document).ready(function (){

    // canvas variables
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var width = c.width;
    var height = c.height;

    var cellSize = 15
    var initialLength = 5;
    var snake = [];

    var directionX = 0;
    var directionY = -1;

    function init() {
        var x = width / 2;
        var y = height / 2;
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

    $(window).on('keydown', changeDirection);

    function changeDirection(e) {
        var code = e.keyCode;
        switch (code) {
            case 37: directionX = -1; directionY = 0; break; //Left key
            case 38: directionX = 0; directionY = -1; break; //Up key
            case 39: directionX = 1; directionY = 0; break; //Right key
            case 40: directionX = 0; directionY = 1; break; //Down key
        }
    }

    function move(time){
        var headX = snake[0].x;
        var headY = snake[0].y;

        headX += directionX;
        headY += directionY;
        var tail = snake.pop(); //pops out the last cell
        tail.x = headX;
        tail.y = headY;
        
        snake.unshift(tail); //puts back the tail as the first cell

        draw();

        requestAnimationFrame(move);
    }


});