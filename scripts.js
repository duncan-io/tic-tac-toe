
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
            this.space.forEach(element => { element.addEventListener("click", this.addGamePiece) });
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
            if(this.textContent == ""){
                console.log(this.space)
                // let arr = Array.from(this.space);
                // console.log(arr.indexOf(this));
                // index = this.space.indexOf(this);
                // this.pieces.splice(index, 1, "X")
                this.render();
            } else {
                return
            }
            
            seeIfWinner();

        },

        seeIfWinner: function(){

        },
    }

    gameBoard.init();
    console.log("function self running")
})();

