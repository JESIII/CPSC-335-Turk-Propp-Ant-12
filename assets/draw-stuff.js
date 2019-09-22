// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
async function draw_ant( ctx , posx, posy, color)
{
	ctx.save( );
	if (color == 0) fill = 'black';
	if (color == 1) fill = 'red';
	if (color == 2) fill = 'yellow';
	if (color == 3) fill = 'blue';
    ctx.fillStyle = fill;
    ctx.rect(posx*10, posy*10, 10, 10);
    ctx.stroke( );
    ctx.fill( );
    ctx.restore( );
}

function goleft(ant, ctx, color){
	if(ant.dir == 0){
		ant.dir = 3;
		ant.x = ant.x - 1;
	}
	else if(ant.dir == 1){
		ant.dir = 0;
		ant.y = ant.y - 1;
	}
	else if(ant.dir == 2){
		ant.dir = 1;
		ant.x = ant.x + 1;
	}
	else if(ant.dir == 3){
		ant.dir = 2;
		ant.y = ant.y + 1;
	}
	
	draw_ant(ctx, ant.x, ant.y, color);
}
function goright(ant, ctx, color){
	if(ant.dir == 0){
		ant.dir = 1;
		ant.x = ant.x + 1;
	}
	else if(ant.dir == 1){
		ant.dir = 2;
		ant.y = ant.y + 1;
	}
	else if(ant.dir == 2){
		ant.dir = 3;
		ant.x = ant.x - 1;
	}
	else if(ant.dir == 3){
		ant.dir = 0;
		ant.y = ant.y - 1;
	}
	draw_ant(ctx, ant.x, ant.y, color);
}

// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill )
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 5; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 5; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}
