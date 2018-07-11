const randomizer = () => {
  const value = 'XO';
  let indexRandom = Math.floor(Math.random() * value.length)
  return value[indexRandom]
}

const ticTacToe = () => {
  const cols = 3;
  const rows = 3;

  let mainBoard = [];
  let countX = 0;
  let countO = 0;
  
  for (let i = 0; i < rows; i++){
    let row = [];
    for (let i = 0; i < cols; i++){
      let input = randomizer();
      
      if (countO >= 5){
        row.push('X')
        countX ++
      } else if (countX >= 5) {    
        row.push('O')
        countO ++
      } else {
        if (input === 'X'){
          countX ++
        } else {
          countO ++
        }
        row.push(input);
      }

    }
    mainBoard.push(row);
    }
  debugger;
  return mainBoard.join('\n');
}

console.log (ticTacToe())
