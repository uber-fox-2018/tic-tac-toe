function ticTacToe (row, column) {
  let result = [];
  let countX = 0;
  // let countO = 0;
  for (let i = 0; i < row; i++) {
    let container = [];
    for (let j = 0; j < row; j++) {
      if (countX <= 4) {
        if(j % 2 !== 0) {
          countX += 1;
          container.push('X');
        } else if (i % 4 === 0){
          container.push('O');
        } else {
          container.push('X');
          countX += 1;
        }
      } else {
        if(i % 2 === 0) {
          container.push('O');
        }
      }
      // container.push(i);
    }
    result.push(container);
  }
  return result;
}

console.log(ticTacToe(3, 3));
