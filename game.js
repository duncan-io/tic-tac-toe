const createPlayer = (playerName, sign) => {
    return {playerName, sign}
}

const gameBoard = (()=>{
    const pieces = ["", "", "","", "", "","", "", ""]

    let board = document.querySelectorAll(".gameSpot");
    
    board.forEach(element => { 
        element.addEventListener("click", () => addGamePiece(element))
    })

    const newPiece = (index, sign)=>{
        console.log("newPiece Firing")
        if(pieces[index] == ""){
            pieces[index] = sign;
        } else{
            return
        }
        
        let enemySign = "O"
        let random = Math.floor(Math.random()*10)
        console.log(random)
        if(pieces[random] == "" ){
            console.log("if side")
            pieces[random] = "O"
                       
        } else {
            console.log("else side")
            let firstEmpty = pieces.indexOf("");
            // if (firstEmpty = null){gameController.draw}
            pieces[firstEmpty] = "O"
        }
        renderBoard();
        gameController.seeIfWinner(sign);
        gameController.seeIfWinner(enemySign)
    }

    const addGamePiece = (element) => {
        let arr = Array.from(board)
        let index = arr.indexOf(element);
        let sign = "X"
        newPiece(index, sign)
    } 

    const renderBoard = () => {
        let i = 0;
            board.forEach(element => {
                element.textContent = pieces[i];
                i++
            })
        }

    console.log("gameBoard firing")
    return {board, newPiece, pieces, renderBoard}
})();

const gameController = (() =>{

    const playerOne = createPlayer("Player 1", "X")
    const playerTwo = createPlayer("Player 2", "O")

    

    const seeIfWinner = (symbol)=> {
        if  (gameBoard.pieces[0] === symbol && gameBoard.pieces[1] === symbol && gameBoard.pieces[2] === symbol
            || gameBoard.pieces[3] === symbol && gameBoard.pieces[4] === symbol && gameBoard.pieces[5] === symbol
            || gameBoard.pieces[6] === symbol && gameBoard.pieces[7] === symbol && gameBoard.pieces[8] === symbol
            || gameBoard.pieces[0] === symbol && gameBoard.pieces[3] === symbol && gameBoard.pieces[6] === symbol
            || gameBoard.pieces[1] === symbol && gameBoard.pieces[4] === symbol && gameBoard.pieces[7] === symbol
            || gameBoard.pieces[2] === symbol && gameBoard.pieces[5] === symbol && gameBoard.pieces[8] === symbol
            || gameBoard.pieces[0] === symbol && gameBoard.pieces[4] === symbol && gameBoard.pieces[8] === symbol
            || gameBoard.pieces[2] === symbol && gameBoard.pieces[4] === symbol && gameBoard.pieces[6] === symbol)

            presentWinner(symbol);
    
        else
            return false
    }

    const presentWinner = (symbol) => {
        let winnerMessage = document.getElementById("winnerMessage");
        let winnerBox = document.getElementById("winnerBox");
        winnerMessage.textContent = `${symbol} player has won!`;
        winnerBox.classList.toggle("hidden")
    }
    console.log("game controller firing")
    return {seeIfWinner}
})();

const winnerPopUp = (() => {
    let yesBtn = document.getElementById("yes");
    let noBtn = document.querySelector(".no");
    let winnerBox = document.getElementById("winnerBox");

    yesBtn.addEventListener("click", () => {
        console.log(gameBoard.pieces)
        for (let i=0; i < 9; i++){
            gameBoard.pieces[i] = "";
        }
        console.log(gameBoard.pieces)
        gameBoard.renderBoard();
        winnerBox.classList.toggle("hidden")
    })

    noBtn.addEventListener("click", () => {
        console.log("Nobtn firing");
        let textBox = document.getElementById("textBox");
        textBox.classList.toggle("hidden");
        let thxText = document.createElement("h1");
        let txt = document.createTextNode("Thanks for playing!");
        thxText.appendChild(txt);
        winnerBox.appendChild(thxText);
    })
})();