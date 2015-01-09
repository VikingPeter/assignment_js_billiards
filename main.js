// Namespace the entire toy in one namespace
// called "BB".
// This toy will allow someone to throw their balls
// on the table. They will bounce around.

var BB = BB || {}

BB.MainModule = (function() {

	var balls = [];
	var numBalls = 2;

	// .css( "top" += velocity + "px") <-- I want that eventually

	// initialize the ball objects and the table.
	function init() {
		BB.TableModule.initTableVars();
		_addBalls();
		_renderBalls();
		_startGameLoop();
	}

	function _addBalls() {
		// construct each ball using the ball constructor
		for (var i = 0; i < numBalls; i++) {
			// add to an array of balls
			balls.push(new BB.BilliardBallModule.BilliardBall(i));
		}
	}

	// render function
	// this will render all of the balls on the already rendered table
	function _renderBalls() {
		// clear last frame of balls
		$('.ball').remove();
		// for each ball render that ball on the table
		for (var i = 0; i < balls.length; i++) {
			balls[i].render();
		}
	}

	// tic the balls!

	function _ticBalls() {
		balls.forEach(function(ball){
			ball.tic();
		});
	}

	// velocity is a property of each ball
	// it increments the top (y) and left (x)
	// css attributes of each ball every interval
	function _changeVectors() {

		// This doesn't work at all...
		// needs to be changed to hold the logic for collisions
		// completely in the table or main (i.e. all in one place).
		// Or at least figure out how to iterate through each
		// of the balls and see if they are colliding with other balls...

		if (balls.length > 1) {

				if(BB.TableModule.checkCollision(balls[0], balls[1]) == true){
					console.log("that worked")// change the vector
				}

		}

		if (BB.TableModule.checkOutOfBounds(balls[0]) == true) {
			balls[0].increment.x *= -1;
			console.log("SHAZAM WAS THE WORST")
		}

		if (BB.TableModule.checkOutOfBounds(balls[1]) == true) {
			balls[1].increment.x *= -1;
			console.log("SHAZAM WAS THE WORST")
		}


			// if (BB.TableModule.checkOutOfBounds(ball) == true) {
			// 	// WTF was I thinking?
			// 	// Oh, this is a placeholder for suresies.
			// 	balls[0].increment.x *= -1
			// 	balls[i].increment.y *= -1
			// 	console.log("Collision!")
			// }

	}

	// tic function
	// this will run the render function every tic
	function _tic() {

		// Logic
		_ticBalls();
		_changeVectors();

		// Draw all of the balls on the table
		_renderBalls();

	}

	function _startGameLoop() {
		// setInterval is global as F.
		setInterval(function(){
			_tic()
		}, 10);
	}

	return {
		init: init
	}

})();

/* RUN DMC */

$(document).ready(function(){
  BB.MainModule.init();
});
