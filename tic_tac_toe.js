function ticTacToe (row, column) {
  let result = [];
  let countX = 0;
  let countO = 0;
  let variabel = 'XO';
  // let countO = 0;
  for (let i = 0; i < row; i++) {
    let container = [];
    for (let j = 0; j < row; j++) {
      let randomOX = variabel[Math.floor(variabel.length * Math.random())];
      if (randomOX === 'X' && countX != 5) {
        container.push(randomOX);
        countX ++;
      } else if (randomOX === 'O' && countO != 5){
        container.push(randomOX);
        countO ++
      } else if(countO >= 5) {
        container.push('X')
        countX++
      } else if(countX >= 5) {
        container.push('O')
        countO++
      }
      else {
        j-= 1;
      }
    }
    result.push(container);
  }
  return result;
  console.log(countO);
}

console.log(ticTacToe(3, 3));
