function ticTacToe(){
    let xo = ['X','O']
    let col = []
    var counterX = 0
    var counterO = 0
    for (let i = 0; i < 3; i++){
        let row = []
        for (let j = 0; j < 3; j++){
            
            let random = xo[Math.floor(Math.random() * Math.floor(2))]
            if (random === 'O' && counterO < 5){
                row.push(random)
                counterO++
            } else if (random === 'X' && counterX < 5){
                row.push(random)
                counterX++
            } else {
                j -= 1
            }
        }
        col.push(row)
    }
    return col
}

console.log(ticTacToe())