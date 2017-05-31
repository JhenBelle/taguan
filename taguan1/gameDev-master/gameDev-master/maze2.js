basicGame.prototype = {
	preload: function(){
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = 'lightblue';
		game.load.image('sky', 'assets/panot.png');
        game.load.image('ground4', 'assets/box.png');
    	game.load.image('crystal', 'assets/louse-1.png',100,114);
        game.load.image('ghost', 'assets/images.png');
        game.load.spritesheet('ekay', 'assets/tao5.png',30,47);
        game.load.image("right","assets/right1.png",200,100);
        game.load.image("left","assets/left1.png",100,50);
        game.load.image("up","assets/down1.png",200,100);
        game.load.image("down","assets/up1.png",200,100);
        game.load.image("pause","assets/pause.png",100,50);
        game.load.image("restart","assets/left1.png",100,50);
                 
	},
	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		bg=game.add.sprite(0,0, 'sky');
  	    bg.scale.x=3.5;
		bg.scale.y=2.3;
       
        player=game.add.sprite(540,240,'ekay');
       
        player.animations.add('left', [4,5,6,7],7, true);
        player.animations.add('right', [ 8,9,10,11], 7, true);
        player.animations.add('down', [0,1,2,3],7, true);
        player.animations.add('up', [12,13,14,15], 7, true);

        keyboard=game.input.keyboard.createCursorKeys();

        process.createCrystals(10000);
        process.createGhosts(20000);
        crystal=game.add.group();
        crystal.enableBody=true
        ghost=game.add.group();
        ghost.enableBody=true
        
        platform=game.add.group();
        platform.enableBody=true;
         
          game.physics.arcade.enable(platform);

        
       //top
//         platforms=platform.create(0,-7,"ground4");
//        platforms.body.immovable=true;
//        platforms.scale.x=35;

        //right
         platforms=platform.create(w-17,5,"ground4");
        platforms.body.immovable=true;
        platforms.scale.y=45;
        //left
         platforms=platform.create(-15,0,"ground4");
        platforms.body.immovable=true;
        platforms.scale.y=45;
		//bottom
          platforms=platform.create(0,489,"ground4");
        platforms.body.immovable=true;
        platforms.scale.x=49;




        //center
//        platforms = platform.create(50,0,"ground4");
//   		platforms.body.immovable = true;
//    	platforms.scale.y = 3;
//
//    	platforms = platform.create(170,0,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 5.8;
//
//    	platforms = platform.create(237,0,"ground4");
//   		platforms.body.immovable = true;
//    	platforms.scale.y = 3;
//
//    	platforms = platform.create(300,71,"ground4");
//   		platforms.body.immovable = true;
//    	platforms.scale.y = 3.2;
//
//    	platforms = platform.create(110,76,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 7.7;
//
//    	platforms = platform.create(367,71,"ground4");
//   		platforms.body.immovable = true;
//    	platforms.scale.y = 5;
//
//    	platforms = platform.create(430,71,"ground4");
//   		platforms.body.immovable = true;
//    	platforms.scale.y = 3.2;
//
//    	platforms = platform.create(540,130,"ground4");
//   		platforms.body.immovable = true;
//    	platforms.scale.y = 3.7;
//
//    	platforms = platform.create(500,205,"ground4");
//   		platforms.body.immovable = true;
//    	platforms.scale.y = 3;
//
//    	platforms = platform.create(435,205,"ground4");
//   		platforms.body.immovable = true;
//    	platforms.scale.y = 5.8;
//
//    	platforms = platform.create(0,130,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 4.3	;
//
//    	platforms = platform.create(50,338,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 7.5	;
//
//    	platforms = platform.create(370,70,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 3.2	;
//
//    	platforms = platform.create(170,130,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 5.2	;
//
//    	platforms = platform.create(430,130,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 5.2	;
//
//    	platforms = platform.create(513,205,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 2	;
//
//    	platforms = platform.create(120,206,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 10.5	;
//
//    	platforms = platform.create(0,413,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x =7.5	;
//
//    	
//
//    	platforms = platform.create(50,210,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 5.7;
//
//    	platforms = platform.create(172,280,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 2.7;
//
//    	platforms = platform.create(239,280,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 5.7;
//
//
////BOTTOM CENTER
//    	platforms = platform.create(435,337,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 3.5	;
//
//    	platforms = platform.create(310,280,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 5.7	;
//
//    	platforms = platform.create(310,415 ,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 5.7	;
//
//    	platforms = platform.create(630,70 	,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 7.3	;
//
//    	platforms = platform.create(540,205 	,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 3.8	;
//
//    	platforms = platform.create(720,145 	,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 3	;
//
//
//    	platforms = platform.create(310,230,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 7.8;
//    	
//    	platforms = platform.create(375,280,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 3;
//    	
//    	platforms = platform.create(525,337,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 3.7;
//
//
//    	platforms = platform.create(500,0,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 3;
//
//    	platforms = platform.create(630,70,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 3;
//    	
//    	platforms = platform.create(590,280,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 9;
//    	
//    	//RIGHT CENTER
//    	platforms = platform.create(700,145,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 5;
//
//    	platforms = platform.create(600,330 	,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 5	;
//
//    	platforms = platform.create(650,350,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.y = 3;
//
//    	platforms = platform.create(650,405,"ground4");
//    	platforms.body.immovable = true;
//    	platforms.scale.x = 3	;
//    	

    game.physics.arcade.enable(player);   
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 0;
    player.body.gravity.x= 0;
       
    scoreText= game.add.text(1,1,'Score: ',
        {
            fontSize:'30px', fill:'darkblue', stroke:'pink', strokeThickness: '4'
        });
     bestText= game.add.text(1,20,'Best: '+process.getData(),
        {
            fontSize:'30px', fill:'darkblue', stroke:'pink', strokeThickness: '4'
        });
    gameOverText = game.add.text((w/2)-100,200,"",{
        fontSize:'40px', fill:'darkblue'
    });
    livesText= game.add.text(1,40,"Lives:5",{fontSize:'30px',fill:"darkblue",stroke:'pink', strokeThickness: '3'});

btnRight = game.add.button(75,270,"right",process.buttonRight);
    btnRight.scale.x = 2;
    btnRight.scale.y = 2;
btnLeft = game.add.button(-25,270,"left",process.buttonLeft);
    btnLeft.scale.x = 2;
    btnLeft.scale.y = 2;
btnUp = game.add.button(25,320,"up",process.buttonUp);
    btnUp.scale.x = 2;
    btnUp.scale.y = 2;
btnDown = game.add.button(25,220,"down",process.buttonDown); 
    btnDown.scale.x = 2;
    btnDown.scale.y = 2;
pause = game.add.button(-10,60,'pause',process.pause,this,1,0);
   pause.scale.x = 1.5;
    pause.scale.y = 1.5;

  btn = game.add.button(40,62,"restart",process.restart); 
  btn.scale.x = 1.5;
    btn.scale.y = 1.5; 
	},
	update: function(){
		game.physics.arcade.collide(crystal,platform);
   game.physics.arcade.collide(ghost,platform);
    //game.physics.arcade.collide(player,crystal);
    game.physics.arcade.collide(player,platform);
    game.physics.arcade.overlap(player,crystal,process.killCrystal);
     game.physics.arcade.overlap(player,ghost,process.killGhost);
	}
}
game.state.add("gameplay",basicGame, true);
