function ticTacToe (row, col) {
    var board = [];
    var randomBoard = 'XO'
    let countX = 0;
    let countO = 0;
    
    for(let i=0; i<row; i++){
        board.push([])

        for(let j=0; j<col; j++){
            board[i].push(randomBoard.charAt(Math.floor(Math.random()*randomBoard.length)))

            if(board[i][j] === 'X'){
                countX++
                if(countX <= 4){
                    randomBoard = 'O'
                }
            }else if(board[i][j] === 'O'){
                countO++
                if (countO <= 4) {
                    randomBoard = 'X'
                }
            }
        }
    }

    return board
}

console.log(ticTacToe(3,3));
