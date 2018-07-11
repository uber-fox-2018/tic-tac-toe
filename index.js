function ticTacToe(){
    let result = [];
    let strXO = "XO";
    let countX = 0;
    let countO = 0;
    for(let i = 0; i<3; i++){
        let row = [];
        result.push(row);
        for(let j = 0; j<3; j++){
            let random = Math.random()*(strXO.length-1);
            let randomXO = strXO[Math.round(random)]
            if(randomXO === "X"){
                if(countX <= 4){
                    row.push(randomXO)
                    countX++
                }else{
                    row.push(randomXO)
                    countO++
                }
            }
            if(randomXO === "O"){
                if(countO <= 4){
                    row.push(randomXO)
                    countO++
                }else{
                    row.push(randomXO)
                    countX++
                }
            }
        }
    }
    return result
}

console.log(ticTacToe())