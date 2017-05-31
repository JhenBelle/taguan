
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    // game.load.image('background','assets/tests/debug-grid-1920x1920.png');
    // game.load.image('player','assets/sprites/phaser-dude.png');
    game.load.image('sky', 'assets/blocks.png');
        game.load.image('ground', 'assets/scalp.png');
        game.load.image('ground2', 'assets/bg2.png');
        game.load.image('ground3', 'assets/bg3.png');
        game.load.image('ground1', 'assets/plat.png');
        game.load.image('crystal', 'assets/crystalblue.png');
        game.load.image('ghost', 'assets/images.png');
//        game.load.spritesheet('ekay', 'assets/tao5.png',30,47);
               
}

var player;
var cursors;

function create() {

    game.add.sprite(0, 0, 1920, 1920, 'sky');

    game.world.setBounds(0, 0, 1920, 1920);

    game.physics.startSystem(Phaser.Physics.P2JS);

    player = game.add.sprite(game.world.centerX, game.world.centerY, 'ekay');

    game.physics.p2.enable(player);

    cursors = game.input.keyboard.createCursorKeys();

    game.camera.follow(player);

}

function update() {

    player.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        player.body.moveUp(300)
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(300);
    }

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(300);
    }

}

function render() {

    game.debug.cameraInfo(game.camera, 25,25);
    game.debug.spriteCoords(player, 32, 500);

}
