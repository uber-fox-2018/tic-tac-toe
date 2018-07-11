function tictactoe() {

    let board = []
    let XO = 'XO'
    let countX = 0
    let countO = 0

    for (let i = 0; i < 3; i++) {
        let row = []
        for (let i = 0; i < 3; i++) {
            var random = Math.trunc(Math.random() * 2)
            row.push(XO[random])
        }
        board.push(row)
    }
    
    for (let i in board) {
        for (let j in board[i]) {
            if (board[i][j] == 'X') {
                countX++
                if(countX > 5) {
                    board[i][j] = 'O'
                }
            } else {
                countO++
                if(countO > 5) {
                    board[i][j] = 'X'
                }
            }
        }
    }
    return board
}

console.log(tictactoe())