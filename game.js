const gameBoard = ()=>{
    const pieces = ["", "", "","", "", "","", "", ""]

    let board = document.querySelectorAll("[id=gameSpot]");

    board.forEach(element => { 
        element.addEventListener("click", gameController.addGamePiece)
    })

    const newPiece = (index, sign)=>{
        pieces[index] = sign;
        renderBoard();
        if (gameController.seeIfWinner(sign)){
            gameController.presentWinner();
        };
    }

    const renderBoard = () => {
        let i = 0;
            board.forEach(element => {
                element.append(document.createTextNode(pieces[i]));
                i++
            })
    }

    
    return {board, newPiece}
};

const gameController = () =>{

    const addGamePiece = () => {
        index = gameBoard.board.indexOf(this);
        sign = "X"
        gameBoard.newPiece(index, sign)
    } 

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

    const presentWinner = () => {
        
    }

    return {addGamePiece, seeIfWinner}
}