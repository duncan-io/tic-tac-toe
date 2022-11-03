
(function () {    
    let gameBoard = {

        pieces: pieces = ["", "", "", "", "", "", "", "", ""],

        init: function(){
            this.cacheDom();
            this.bindEvents();
            this.render();
            console.log("init running")
        },
        cacheDom: function(){
            this.board = document.getElementById("gameArea");
            this.space = document.querySelectorAll("[id=gameSpot]");
            this.test = console.log("Dom is caching");            
        },
        bindEvents: function(){
            this.space.forEach(element => { element.addEventListener("click",
                this.addGamePiece
               ) });
            this.test = console.log("Events binded")
        },
        render: function(){
            let i = 0;
            this.space.forEach(element => {
                element.append(document.createTextNode(pieces[i]));
                i++
            })
            console.log("Render is working")
        },
        addGamePiece: function(){

            console.log(this.space)
            if(this.textContent == ""){
                
                let currentState = document.querySelectorAll("[id=gameSpot]");
                let arr  = Array.from(currentState);
                let index = arr.indexOf(this);
                let gamePiece = "X"
                pieces[index] = "X"
                this.textContent = gamePiece;
                console.log(arr)
                console.log(pieces)
            } else {
                return
            }
            // seeIfWinner();

        },

        seeIfWinner: function(){

        },
    }

    gameBoard.init();
    console.log("function self running")
})();

