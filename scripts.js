
(function () {    
    let gameBoard = {

        init: function(){
            this.cacheDom();
            this.bindEvents();
            console.log("init running")
        },
        cacheDom: function(){
            this.board = document.getElementById("gameArea");
            this.space = document.querySelectorAll("[id=gameSpot]");
            this.test = console.log("Dom is caching");            
        },
        bindEvents: function(){
            this.space.forEach(element => { element.addEventListener("click", this.addGamePiece) });
            this.test = console.log("Events binded")
        },
        addGamePiece: function(){
            if(this.textContent == ""){
                this.append(document.createTextNode("X"));
            } else {
                return
            }
            

        },
    }

    gameBoard.init();
    console.log("function self running")
})();

