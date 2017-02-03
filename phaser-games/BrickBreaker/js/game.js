// Main game handle
var game = new Phaser.Game(800, 600, Phaser.AUTO);

// Our game!
var BrickBreaker = function(game) {
	this.playerPaddle = null;
	this.brickGroup = null;
	this.ballGroup = null;

	this.paddleSpeed = 500;
	this.ballStartSpeed = 300;

	//this.isBallCaptured = true;
	this.capturedBall = null; // This is the ball that hovers over the paddle
	this.numPlayerBalls = 4; // Players should start out with either 2 or 0, but that's a debate for another time...

	this.currentLevel = 0;

	this.brickScreenOffset = 40;
	this.brickWidth = 80;
	this.brickHeight = 20;
	this.brickPadding = 10;

	// GUI
	this.ballText = null;
};

BrickBreaker.prototype = {

	init: function() {
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;

		Phaser.Canvas.setImageRenderingCrisp(this.game.canvas); // What does this do?

		this.physics.startSystem(Phaser.Physics.ARCADE); // Used for collision detection
	},

	preload: function() {
		this.load.image('paddle', 'assets/paddle.png');
		this.load.image('ball', 'assets/ball.png');
		this.load.image('redBrick', 'assets/redBrick.png');

		this.ballText = this.add.text(20, 20, 'Balls: ' + this.numPlayerBalls, {
			font: '18px Arial',
			fill: '#ff0044',
			align: 'center'
		});
	},

	create: function() {
		// set the background
		this.stage.backgroundColor = '#000066';

		this.physics.arcade.checkCollision.down = false; 	// let objects fall out of the bottom of the screen

		// setup the player paddle
		this.playerPaddle = this.add.sprite( this.world.width/2, this.world.height-32, 'paddle', 0); // Set the player to the bottom middle of the frame
		this.playerPaddle.anchor.set(0.5,0.5); // Center the anchor
		this.physics.arcade.enable(this.playerPaddle); // Enables collision detection
		this.playerPaddle.body.collideWorldBounds = true;
		this.playerPaddle.body.immovable = true; // T his prevents the ball from moving the paddle

		// setup the brick group
		this.brickGroup = this.add.physicsGroup();

		// create the whole set of bricks
		this.layBricks();

		// setup the ball group
		this.ballGroup = this.add.physicsGroup();

		// create the first ball
		this.addBall(true);

		// setup input
		this.cursors = this.input.keyboard.createCursorKeys();
		},

	handleInput: function() {
		// TODO: Give the paddle some falloff momentum!
		this.playerPaddle.body.velocity.x = 0; // always reset to make input perfectly responsive

		// Move the paddle
		if( this.input.keyboard.isDown(Phaser.Keyboard.LEFT) ) {
			this.playerPaddle.body.velocity.x = -this.paddleSpeed;
		}
		else if( this.input.keyboard.isDown(Phaser.Keyboard.RIGHT) ) {
			this.playerPaddle.body.velocity.x = this.paddleSpeed;
		}

		// Release a ball if it's captured
		if( this.capturedBall && this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			this.moveBall(this.capturedBall);
			this.capturedBall = null;
		}
		return true;
	},


	moveBall: function(ball) {
		// Get that ball moving
		ball.body.velocity.x = this.ballStartSpeed/2;
		ball.body.velocity.y = -this.ballStartSpeed/2;

		console.log('move that ball!');
	},

	update: function() {
		// check input for keyboard, touch and tilt?
		this.handleInput();

		// hover the ball over the paddle
		if( this.capturedBall ) {
			this.capturedBall.body.position.x = this.playerPaddle.body.center.x;
		}

		// Check collision between the ball and the paddle
		this.physics.arcade.collide(this.playerPaddle, this.ballGroup, this.onPaddleHit, null, this);

		// Check collision between the ball and the bricks
		this.physics.arcade.collide(this.brickGroup, this.ballGroup, this.onBrickHit, null, this);
	},

	addBrick: function(x, y, brickSprite){
		var brick = this.add.sprite(x, y, brickSprite, 0 );
		this.physics.arcade.enable(brick);
		brick.body.immovable = true;

		// add new brick to the group
		this.brickGroup.add(brick);
	},

	layBricks: function() {
		var level = masterLevelList[this.currentLevel];
		console.log(level.length);
		console.log(level[0].length);

		for( var i = 0; i < level.length; i++ ) {
			for( var j = 0; j < level[i].length; j++ ) {

				// find x and y values based on padding and row/colum
				var xPos = j*(this.brickWidth + this.brickPadding) + this.brickScreenOffset;
				var yPos = i*(this.brickHeight + this.brickPadding) + this.brickScreenOffset;

				var brickType = level[i][j];
				if( brickType === 0 ) {
						// skip block placement
				}
				else if( brickType === 1 ) {
					// add a redblock
					this.addBrick(xPos, yPos, 'redBrick');
				}

				console.log(brickType + ' '); // for debugging purposes
				console.log()
			}

			console.log('\n'); // for debugging purposes.
		}
	},

	addBall: function(captured, posX, posY) {
		var ball = this.add.sprite(posX, posY, 'ball', 0);
		ball.anchor.set(0.5,0.5);
		this.physics.arcade.enable(ball); // Enables collision detection
		ball.body.bounce.setTo(1,1);
		ball.body.collideWorldBounds = true; // Let the ball bounce of the walls, but
		ball.events.onOutOfBounds.add(this.ballOutOfBounds, this); // not if it goes out of the bottom of the screen
		ball.checkWorldBounds = true; // this ensures the check is made

		// the ball gets positioned top center of the paddle if it's the first onPaddleHit
		if( captured ) {
				ball.position.x = this.playerPaddle.body.center.x/2;
				ball.position.y = this.playerPaddle.body.center.y - 45; // give it some space man!
				var velX = 0;
				var velY = 0;

				this.capturedBall = ball;
		}

		else {
			var velX = this.ballStartSpeed/2;
			var velY = -this.ballStartSpeed/2;
		}

		// set new velocity
		ball.body.velocity.y = velY;
		ball.body.velocity.x = velX;

		this.ballGroup.add(ball); // Add to main group

		return ball;
	},

	onPaddleHit: function(paddle, ball) {
		// reflect ball according to where it lands on the paddle
		console.log("ball bounce x: " + ball.body.velocity.x + "\n" + "ball bounce y: " + ball.body.velocity.y + "\n");
		// We have to override phaser's bounce behavior because it will bounce off the surface (as it would in realife)
		// instead of reflect based on the balls distance to the Center
		var newDirection = Phaser.Point.subtract(ball.body.center, paddle.body.center);
		//newDirection.normalize();
		newDirection.setMagnitude(this.ballStartSpeed);
		ball.body.velocity = newDirection;
	},

	onBrickHit: function(brick, ball) {
		console.log("ball hit a brick!");
		brick.kill();
	},

	ballOutOfBounds: function(ball) {
		console.log("the ball has left the scene!");

		this.numPlayerBalls--;
		if( this.numPlayerBalls >= 0 ) {
				this.addBall(true, 0, 0);
		}

		// Update the number of remaining balls text
		this.ballText.setText('Balls: ' + this.numPlayerBalls);
	}

};


//
// create our main game state and go
//
game.state.add('Game', BrickBreaker, true);

//
// End
//
