var playerCount, canvas,backGroundImg,form,player,game,database ,allPlayers;
var gameState = 0;
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    game=new Game()
    game.getState()
    game.start()
    
}

function draw(){
 if (playerCount==0){
     game.update(0)
 }
 if(gameState==1){
     clear ()
     game.play()
 }

}

