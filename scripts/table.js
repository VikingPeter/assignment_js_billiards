// This is holds the table and its bounds.
// The table will render as a rectangle inside a div
// and serve as the bounds for the balls

BB = BB || {}

BB.TableModule = (function(){

	var $table;
	var bounds;
	var balls = [];

	// this has to happen after the DOM loads in MainModule
	function initTableVars() {
		$table = $('.table');
		bounds = $table.get(0).getBoundingClientRect();
	}

	// don't forget to move this into a private function
	function checkOutOfBounds(ball) {
		// check if the edge of a ball is colliding with the table
		// the X and the Y start at the left and top of the ball
		// because of absolute positioning.
		return (ball.x + (ball.radius * 2)) > bounds.right ||
					 (ball.x) < bounds.left  ||
					 (ball.y) < bounds.top   ||
					 (ball.y + (ball.radius * 2)) > bounds.bottom
	}

		// if colliding change direction.
	function checkCollision(b1, b2) {

		// check the edge of the ball against an object that
		// can experience collisions
		var dx = (b1.x + b1.radius) - (b2.x + b2.radius)
		var dy = (b1.y + b1.radius) - (b2.y + b2.radius)
		var distance = Math.sqrt(dx * dx + dy * dy);

		if (distance < b1.radius + b2.radius) {
			return true
		}
	}


	function renderTable() {
		// render table given the table properties
		// this creates a div with height and width
	}

	return {
    $table: $table,
    bounds: bounds,
    balls: balls,
    initTableVars: initTableVars,
    checkOutOfBounds: checkOutOfBounds,
    checkCollision: checkCollision
  };
})();