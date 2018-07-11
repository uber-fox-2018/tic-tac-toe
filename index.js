

function genXO() {

    var possible = "XO";
    var strXO = ''
    for (var i = 0; i <= 1; i++) {
        strXO = possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return strXO
}

function board(x, o) {

    let board = []
    let counterX = 0
    for (let i = 0; i < 3; i++) {
        let arr = []

        board.push(arr)

        for (let j = 0; j < 3; j++) {

            let random = genXO()

            if (random == 'X' && counterX <5) {
                arr.push('X')

                counterX++

            }

            else {

                arr.push('O')
            }
                console.log(board[i][j])


        }

    }
    // console.log(counterX)

    return board

}

console.log(board(5, 4))
