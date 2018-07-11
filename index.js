function ticTacToe() {
    let res = []
    let x = 0
    let o = 0

    for (let i = 0; i < 3; i++) {
        let subRes = []
        for (let j = 0; j < 3; j++) {
            let random = Math.round(Math.random())
        
            if (random % 2 === 0 && o < 5) {
                subRes.push('o')
                o++
            } else {
                if ( x < 5) {
                    subRes.push('x')
                    x++
                } else {
                    subRes.push('o')
                    o++
                }
            }
        }
        res.push(subRes)
    }
    return res
}

console.log(ticTacToe())