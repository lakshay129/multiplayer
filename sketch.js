var gameState=0;
var playerCount=0;
var allPlayers;
var form1,player1;
var game1;
var database;
function setup(){
  createCanvas(800,800);
  database=firebase.database();
game1 = new game();
game1.getState();                                
game1.start();

  
}

function draw(){
  if(playerCount === 4){
    game1.update(1);
  }
  if(gameState ===1){
    game.play();
  }

}
