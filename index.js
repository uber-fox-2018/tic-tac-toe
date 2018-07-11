function ticTacToe(colsRows) {
    let board = [];
    var players = 'xo';

    for (let i = 0; i < colsRows; i++) {
        let rows = [];
        board.push(rows);
        for (let j = 0; j < colsRows; j++) {
            board[i].push(players[Math.floor(Math.random() * players.length)]);
        }
    }

    let counterX = 0;
    let counterO = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'o') {
                counterO++;
                if (counterO > 5) {
                    board[i][j] = 'x';
                }
            } else if (board[i][j] === 'x') {
                counterX++;
                if (counterX > 5) {
                    board[i][j] = 'o';
                }
            }
        }
    }
    // console.log(board)
    return board

}

console.log(ticTacToe(3));