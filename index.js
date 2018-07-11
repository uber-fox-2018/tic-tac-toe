function tictactoe (var1, var2) {
    var alf= var1+var2
    var result= []
    var countX= 0
    var countO= 0

    for (var i=1; i<=3; i++) {
        var tmp= []

        for (var j=1; j<=3; j++) {
            var idx= Math.floor(Math.random() * 2)         // returns a random integer from 0 to 1
            
            if (countX<5 && countO<5) {
                tmp.push(alf[idx])

                if (alf[idx]===var1) {
                    countX++
                } else {
                    countO++
                }
            } else

            if (countX===5) {
                tmp.push(var2)
            } else

            if (countO===5) {
                tmp.push(var1)
            }
        }
        result.push(tmp)
    }   
    return result
}


console.log (tictactoe('X','O'))