function tictactoe(row,col){

    let result = []
    let countX = 0
    let countO = 0

    for(let i = 0; i < row ; i++){
        result.push([])

        let ticTac = 'XO'
        
        for(let j = 0; j<row; j++){
            result[i].push(ticTac[Math.floor(Math.random() * ticTac.length)])
            
            if(result[i][j] === 'X'){
                countX++
                if(countX >= 4){
                    ticTac = 'O'
                }
            } else if (result[i][j] === 'O'){
                countO++
                if(countO >= 4){
                    ticTac = 'X'
                }
            }
        }
    }
    return result

}
console.log(tictactoe(3,3))