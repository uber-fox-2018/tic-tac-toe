function ticTacToe(rows, cols) { 
  const xo ='XO'
  const output = [];
  let counter = 0;

  for(let i = 0; i < rows; i++) {
    const xoRandom = [];
    for(let j = 1; j <= cols; j++) {
      let indexXORandom = Math.floor(Math.random() * xo.length);
      xoRandom.push(xo.charAt(indexXORandom));
    }
    output.push(xoRandom);
  }

  return output;
  
}

console.log(ticTacToe(3,3));
