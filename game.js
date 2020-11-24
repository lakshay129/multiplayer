class game{
    constructor(){
        
    }
    getState(){
        var gameStateref= database.ref('gameState');
        gameStateref.on("value",function(data){gameState = data.val()});
    }
    update(state){
        database.ref('/').update({gameState: state});
    }
    async start(){
        if(gameState === 0){
            player1 = new player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount =playerCountRef.val();
                player1.getCount();
            }
            form1 = new form();
            form1.display();
        }

    }
    play(){
        form1.hide();
        text("Game Start", 120,100);
        Player.getPlayerInfo();
        if(allPlayers  !== undefined){
            pos = 150;
            for(var plr in allPlayers){
                if(plr === "player" +player1.index){
                    fill("red");
                }
                else{
                    fill("black")
                }
                textSize(15);
                text(allPlayers[plr].name + " : "+ allPlayers[plr].distance,120,pos)  
                pos = pos +20;
            }
            
        }
    }
}