<div id='display_game'></div>
			<script type="text/javascript">
			var w=300,h=150;
			var game= new Phaser.Game(w, h, Phaser.CANVAS, 'display_game',{preload: preload, create: create, update: update})
 


		function preload () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = 'lightblue';
		game.load.image('sky', 'assets/maze.png');
        game.load.image('ground4', 'assets/scalp.png');
    	game.load.image('crystal', 'assets/lice1.png');
        game.load.image('ghost', 'assets/images.png');
        game.load.spritesheet('ekay', 'assets/tao5.png',30,47);

        var pause,restart;
        
				

	function create () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
/
    game.physics.arcade.enable(player);   
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 0;
    player.body.gravity.x= 0;
       
    scoreText= game.add.text(1,1,'Score: ',
        {
            fontSize:'30px', fill:'darkblue', stroke:'pink', strokeThickness: '4'
        });
     bestText= game.add.text(1,20,'Best: '+getData(),
        {
            fontSize:'30px', fill:'darkblue', stroke:'pink', strokeThickness: '4'
        });
    gameOverText = game.add.text((w/2)-100,200,"",{
        fontSize:'40px', fill:'darkblue'
    });
    livesText= game.add.text(1,40,"Lives:5",{fontSize:'30px',fill:"darkblue",stroke:'pink', strokeThickness: '3'});

btnRight = game.add.button(75,270,"right",buttonRight);
    btnRight.scale.x = 2;
    btnRight.scale.y = 2;
btnLeft = game.add.button(-25,270,"left",buttonLeft);
    btnLeft.scale.x = 2;
    btnLeft.scale.y = 2;
btnUp = game.add.button(25,320,"up",buttonUp);
    btnUp.scale.x = 2;
    btnUp.scale.y = 2;
btnDown = game.add.button(25,220,"down",buttonDown); 
    btnDown.scale.x = 2;
    btnDown.scale.y = 2;
pause = game.add.button(-10,60,'pause',pause,this,1,0);
   pause.scale.x = 1.5;
    pause.scale.y = 1.5;

  btn = game.add.button(40,62,"restart",restart); 
  btn.scale.x = 1.5;
    btn.scale.y = 1.5;    

    }
	function update () {
	game.physics.arcade.collide(crystal,platform);
   game.physics.arcade.collide(ghost,platform);
    //game.physics.arcade.collide(player,crystal);
    game.physics.arcade.collide(player,platform);
    game.physics.arcade.overlap(player,crystal,killCrystal);
     game.physics.arcade.overlap(player,ghost,killGhost);

    

    
}

function createCrystals(time){
    setInterval(function(){
        crystals= crystal.create(Math.random()*w,Math.random()*h,"crystal");
        crystals.body.gravity.y=0;
        var scale= Math.random(); 
    },time);
}

function createGhosts(time){
    setInterval(function(){
        ghosts= ghost.create(Math.random()*w,Math.random()*h,"ghost");
        ghosts.body.gravity.y=0;
        var scale= Math.random();
    },time);
}
var score=0;
var lives=5;
function killCrystal(player,crystal){
    score=score+10;
    crystal.kill();
    if(getData()<=score){
        saveData(score);
        bestText.text="Best:"+score;
        console.log("x");
    }
    scoreText.text="Score:"+score;
        
}

    function killGhost(player,ghost){
       lives= lives-1;
        ghost.kill();
        livesText.text="Lives: " +lives;
       if (lives==0){
    game._paused = true;
    gameOverText.text="GAMEOVER: \n Best:"+getData() +"\n Score:"+score;
     setTimeout(function(){
        btn.frame = 0;
        game._paused = true;
    }, 100000000)
    game._paused = false;

}       
}
function saveData(score){
    localStorage.setItem("gameData",score);
}
function getData(){
    var data= localStorage.getItem("gameData");
    if(data==null|| data==""){
        data=0
    }
    return data;
}

function buttonLeft(){
    player.body.velocity.x= -100;
        player.animations.play('left');
   // btnLeft.frame = 1;
}
function buttonRight(){
    player.body.velocity.x = 100;
        player.animations.play('right');
    //btnRight.frame = 1;
}
function buttonUp(){
    player.body.velocity.y = 100;
        player.animations.play('down');
    //btnUp.frame = 1;
}
function buttonDown(){
    player.body.velocity.y =- 100;
        player.animations.play('up');
    // btnDown.frame = 1;
}
function pause(){
    this.game.paused = true;
    var stopText = this.add.text(150,200, 'Paused. Tap anywhere To continue',{fontSize:'35px',fill:"darkblue",stroke:'pink', strokeThickness: '3'});
    this.input.onDown.add (function(){
        stopText.destroy();
        this.game.paused = false;
        }, this);
    
}

function restart(){
    location.reload();
   }
		</script>