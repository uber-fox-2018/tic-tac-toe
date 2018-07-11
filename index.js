const tictacRandom = (board) => {
  const player = 'XO'
  let mainBoard = []

  for (let i = 0; i < board; i++) {
    var isiBoard = []
    for (let j = 0; j < board; j++) {
      isiBoard.push(player.charAt(Math.floor(Math.random() * player.length)))
    }
    mainBoard.push(isiBoard)
  }

  return mainBoard
  
}

const gameTictactoe = () => {
  let countX = 0
  let countO = 0
  let gameBoard = tictacRandom(3)

  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === 'X') {
        countX++
        if (countX > 5) {
          gameBoard[i][j] = 'O'
        }
      } else if (gameBoard[i][j] === 'O') {
        countO++
        if (countO > 5) {
          gameBoard[i][j] = 'X'
        }
      }
    }
  }
  console.log(gameBoard)
}
gameTictactoe()