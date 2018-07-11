function tictac(rows, cols) {
    var childArr = []
    var mainArr =[]
    var xo = 'XO'
    var countO = 0
    var countX = 0
    for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols; j++){
            var toPush = xo[Math.floor(Math.random()*2)]
            if(toPush === 'X'){
                countX++
            }else{
                countO++
            }

            if(toPush === 'X'){
                if(countX > 5){
                    childArr.push('O')
                    countO++
                    countX--
                }else{
                    childArr.push(toPush)
                }
            }else if(toPush === 'O'){
                if(countO > 5){
                    childArr.push('X')
                    countO--
                    countX++
                }else{
                    childArr.push(toPush)

                }
            }


        }
        mainArr.push(childArr)
        childArr = []
    }
   
    return mainArr
}

console.log(tictac(3,3));


