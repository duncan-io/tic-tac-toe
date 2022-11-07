
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

        },
        bindEvents: function(){
            this.space.forEach(element => { 
                element.addEventListener("click", this.addGamePiece)
            });
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
                let currentState = document.querySelectorAll("[id=gameSpot]");
                let arr  = Array.from(currentState);
                let index = arr.indexOf(this);
                console.log(index)
                let gamePiece = "X"
                pieces[index] = gamePiece;
                window.gameController.seeIfWinner(gamePiece)
            } else {
                return
            }
//Do I need to change scope of seeIfWinner? Or do I need to write it all up here. 
// It is possible this should be the job of a "game controller". May need to rewrite into factory functions
        },
    }

    gameBoard.init();
    console.log("function self running");

    const gameController = ()=> {
       const seeIfWinner = (symbol)=> {
            if  (pieces[0] === symbol && pieces[1] === symbol && pieces[2] === symbol
                || pieces[3] === symbol && pieces[4] === symbol && pieces[5] === symbol
                || pieces[6] === symbol && pieces[7] === symbol && pieces[8] === symbol
                || pieces[0] === symbol && pieces[3] === symbol && pieces[6] === symbol
                || pieces[1] === symbol && pieces[4] === symbol && pieces[7] === symbol
                || pieces[2] === symbol && pieces[5] === symbol && pieces[8] === symbol
                || pieces[0] === symbol && pieces[4] === symbol && pieces[8] === symbol
                || pieces[2] === symbol && pieces[4] === symbol && pieces[6] === symbol)
                return true
            else
                return false
        }
    }
 

// console.log(gameBoard.pieces)

