// Don't worry, it's just a... 
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update});

//
// Input variables
// 
var swipeBX, swipeBY, swipeEX, swipeEY;
var swipeMin = 100;

//
// Game objects
//
var player;
var platforms;

var score = 0;
var scoreText;

function preload()
{
	//
	// Load assets
	//
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create()
{
	//
	// Scale code
	//
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;

	//
	// Game stage
	//
	//
	game.stage.backgroundColor = '#eee';

	//
	// INIT PHYSICS
	//
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//
	// Setup the input events
	//
	game.input.onDown.add( beginSwipe, this );
	game.input.onUp.add( endSwipe, this );

	// Create the background
	game.add.sprite(0, 0, 'sky');
	
	// Create the stars
	stars = game.add.group();

	stars.enableBody = true;

	for( var x = 0; x < 12; x++ )
	{
		var star = stars.create( x*70, 0, 'star');
		star.body.gravity.y = 6;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}

	// The platforms group contains the ground and two ledges
	platforms = game.add.group();

	platforms.enableBody = true;

	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2, 2); // Scale to fit world
	ground.body.immovable = true;
	ground.body.enableFriction = true;

	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge.body.enableFriction = true;

	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;
	ledge.body.enableFriction = true;

	game.add.sprite(0, 0, 'star');

	// Create the player
	player = game.add.sprite(32, game.world.hight - 150, 'dude');

	game.physics.arcade.enable(player);

	// player physics properties
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;
	player.body.enableFriction = true;
	player.body.drag.set(100);
	
	// Walking animations
	player.animations.add('left', [0, 1, 2, 3], 10, true);
	player.animations.add('right', [5, 6, 7, 8], 10, true);

	// Create the score system
	scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '24px', fill: '#000'});
}

function update()
{
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars, platforms);

	game.physics.arcade.overlap(player, stars, collectStar, null, this);
}

//
// Input events
//

function beginSwipe(pointer)
{
	this.start_swipe_point = new Phaser.Point(pointer.x, pointer.y);
}

function endSwipe(pointer)
{
	var swipe_length;
	var swipe_normal;

	this.end_swipe_point = new Phaser.Point( pointer.x, pointer.y );
	swipe_length = Phaser.Point.distance( this.end_swipe_point, this.start_swipe_point );
	swipe_normal = Phaser.Point.subtract( this.end_swipe_point, this.start_swipe_point );
	Phaser.Point.normalize(swipe_normal, swipe_normal);
	
	if( swipe_length > 100 )
	{
		movePlayer( swipe_normal );
	}
}

function movePlayer( point )
{
	// Reset velocity
	player.body.velocity.x = 0;
	player.body.velocity.y = 0;

	player.body.velocity.x = point.x*200;
	player.body.velocity.y = point.y*350;
}

//
// Collision events
//
function collectStar(player, star)
{
	star.kill();

	score += 10;
	scoreText.text = 'score: ' + score;
}