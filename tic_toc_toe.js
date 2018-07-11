let tic_toc_toe = function (row, col) {
    let dimensi = row * col
    let result = []
    const xo = 'XO'
    let countX = 0
    let countO = 0
    for (let i = 0; i < row; i++) {
        let temp = []
        for (var j = 0; j < col; j++) {
            let index = Math.floor(Math.random() * xo.length)
            if (xo[index] == 'X' && countX <= 5) {
                temp.push(xo[index])
                countX++
            }
            if (xo[index] == 'O' && countO <= 5) {
                temp.push(xo[index])
                countO++
            } 
            if(countO > 5 || countX > 5) j -= 1
        }
        result.push(temp)
    }
    console.log(countO, countX);
    return result
}

console.log(tic_toc_toe(3, 3));