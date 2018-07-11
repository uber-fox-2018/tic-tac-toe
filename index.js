function tic_tac_toe(){
    let size = 3;
    let output = []
    let XO = ['x','o']
    let counterX = 0;
    let counterO = 0;

    for (let i = 0; i < size; i++) {
        let newArr = []
        for (let j = 0; j < size; j++) {
            let random = Math.floor(Math.random()*2)
            if (random === 0 && counterX > 4) {
                newArr.push('o')
                counterO++
            }else if (random === 1 && counterO > 4) {
                newArr.push('x')
                counterX++
            }else if (random === 0) {
                newArr.push(XO[random])
                counterX++
            }else if (random === 1) {
                newArr.push(XO[random])
                counterO++
            }
        }
       output.push(newArr) 
    }
    return output
}

console.log(tic_tac_toe());
console.log(tic_tac_toe());
