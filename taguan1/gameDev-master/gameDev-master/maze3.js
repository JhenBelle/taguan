var process = function() {
	   "use strict";
        return {
   createCrystals:function(time){
    setInterval(function(){
        crystals= crystal.create(Math.random()*w,Math.random()*h,"crystal");
        crystals.body.gravity.y=0;
        var scale= Math.random(); 
    },time);
},

 createGhosts:function(time){
    setInterval(function(){
        ghosts= ghost.create(Math.random()*w,Math.random()*h,"ghost");
        ghosts.body.gravity.y=0;
        var scale= Math.random();
    },time);
},

 killCrystal:function(player,crystal){
    score=score+10;
    crystal.kill();
    if(process.getData()<=score){
        process.saveData(score);
        bestText.text="Best:"+score;
        console.log("x");
    }
    scoreText.text="Score:"+score;
        
},

     killGhost:function(player,ghost){
       lives= lives-1;
        ghost.kill();
        livesText.text="Lives: " +lives;
       if (lives==0){
    game._paused = true;
    gameOverText.text="GAMEOVER: \n Best:"+process.getData() +"\n Score:"+score;
     setTimeout(function(){
        btn.frame = 0;
        game._paused = true;
    }, 100000000)
    game._paused = false;

}       
},
 saveData:function(score){
    localStorage.setItem("gameData",score);
},
 getData:function(){
    var data= localStorage.getItem("gameData");
    if(data==null|| data==""){
        data=0
    }
    return data;
},

 buttonLeft:function(){
    player.body.velocity.x= -100;
        player.animations.play('left');
   // btnLeft.frame = 1;
},
 buttonRight:function(){
    player.body.velocity.x = -100;
        player.animations.play('right');
    //btnRight.frame = 1;
},
 buttonUp:function(){
    player.body.velocity.y = 100;
        player.animations.play('down');
    //btnUp.frame = 1;
},
 buttonDown:function(){
    player.body.velocity.y =- 100;
        player.animations.play('up');
    // btnDown.frame = 1;
},
 pause:function(){
    this.game.paused = true;
    var stopText = this.add.text(150,200, 'CONTINUE TO PLAY',{fontSize:'35px',fill:"darkblue",stroke:'pink', strokeThickness: '3'});
    this.input.onDown.add (function(){
        stopText.destroy();
        this.game.paused = false;
        }, this);
    
},
restart:function(){
    location.reload();
   },

	}
}();
