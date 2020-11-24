class form{
    constructor (){
        this.input = createInput("Enter your name:");
        this.button = createButton("START");
        this.greeting = createElement('h2');

    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();


    }
    
    display(){
        var title  = createElement('h2');
        title.html("CAR RACING!!!!");
        title.position(200,10);
     

        this.input.position(200, 150);
        this.button.position(300,250);

        this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
            player1.name = this.input.value();

           this. greeting.html("Hye!!!" +player1.name);
            this.greeting.position(200,160);

            playerCount = playerCount +1;
            player.index = playerCount;
            player1.update();
            player1.updateCount(playerCount);
        })
    }


}