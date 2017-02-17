var c = document.getElementById("slate");
var ctx = c.getContext('2d')
ctx.fillStyle = '#cc99ff'

var rid;

var animateCircle = function(){
    var r = 1;
    var changeX = 1;
    window.cancelAnimationFrame(rid);
    
    var drawCircle = function(){
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        ctx.arc( c.width / 2, c.height / 2, r, 0, 2 * Math.PI );
        ctx.fill()
        if( r == c.width / 2){
            changeX = -1; // If radius is at max, then negate rate. 
        }else if( r == 1 ){
            changeX = 1;
        }
        r += changeX;
        rid = window.requestAnimationFrame(drawCircle);
    }
    drawCircle();

}

var animateShape = function(){
    var changeX = 1;
    var changeY = 1;
    var x = Math.random() * (c.width - 100);
    var y = Math.random() * (c.height - 50);
    window.cancelAnimationFrame(rid);

    var drawShape = function(){
        ctx.clearRect( 0, 0, c.width, c.height);
        ctx.beginPath();
        ctx.fillRect( x, y, 100, 50 );
        ctx.fill();
        if( x <= 0 || x + 100>= c.width){
            changeX *= -1;
        }
        if( y <= 0 || y + 50 >= c.height){
            changeY *= -1;
        }
        x += changeX;
        y += changeY;

        rid = requestAnimationFrame( drawShape );
    }

    var loadShape = function(){
        img = new Image();
        img.src = 'img/'
    }

    drawShape();
}

var cir = document.getElementById('circButton');
cir.addEventListener('click', animateCircle);

var stop = document.getElementById('stopButton');
stop.addEventListener('click', function(){
    window.cancelAnimationFrame(rid);
});

var dvd = document.getElementById('dvdButton');
dvd.addEventListener('click', animateShape);

//rid = window.requestAnimationFrame( animateCircle )
rid = window.requestAnimationFrame( animateShape );
