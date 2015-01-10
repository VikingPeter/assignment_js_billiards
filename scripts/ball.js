// Here is where each billiard ball object
// will be created. It should know what
// attributes it has.
// The attributes included should be:
// radius
// velocity
// initial position
// use animate <-- (?) to set the future properties of the ball
// in the example below, the +=50 9s actually the end result
// and the 5000 is the amount of time in ms until that happens
// $ball.animate({left: "+=50"}, 5000, function(){})

BB= BB || {}


BB.BilliardBallModule = (function() {

	var _initRadius = 50;

	//  velocity is the distance traveled for each step in a vector
	//  composed of x and y.
	var _initVelocity = { dx: 1, dy: 0}; // units are pixels

	// create a ball object
	// this is the constructor
	function BilliardBall(index) {
		this.velocity = {dx:1,dy:0};
		this.radius = _initRadius;
		this.x = (Math.floor(Math.random()*300) + 8);
		this.y = (Math.floor(Math.random()*300) + 8);
		this.index = index;
	}

	// render the ball object
	BilliardBall.prototype.render = function() {
		$ball = $("<div></div>")
        .addClass("ball")
        .css("width",   (this.radius * 2) + "px" )
        .css("height",  (this.radius * 2) + "px" )
        .css("left", this.x)
        .css("top", this.y);
    $('.table').append($ball);
	};

	BilliardBall.prototype.tic = function() {
		this.x += this.velocity.dx; // this is NOT hard coded velocity
		this.y += this.velocity.dy;
	}

	return {
		BilliardBall: BilliardBall
	}
})();