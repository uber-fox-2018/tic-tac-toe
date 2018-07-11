function ticTacToe(row, column) {
    let resultArr = []
    let xO = 'XO'
    let counterX = 5
    let counterO = 4
    for(let i = 0; i < row; i++) {
      let subArr = []
      for(let j = 0; j < column; j++) {
        let random = Math.floor(Math.random() * (1 - 0 + 1));
        if (counterO === 0) {
          subArr.push('X')
        } else if (counterX === 0) {
          subArr.push('O')
        } else {
          if (xO[random] === 'X') {
            subArr.push(xO[random])
            counterX--
          } else {
            subArr.push(xO[random])
            counterO--
          }
        }
      }
      resultArr.push(subArr)
    }
    return resultArr
  }
  
  console.log(ticTacToe(3, 3));