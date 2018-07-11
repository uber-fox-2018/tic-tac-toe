function ticTacToe(col,row){
	var tictac = 'XO'
	var result=[]
	var countX = 0, countO = 0
	for (var i = 0 ; i < row ; i++){
		var temp=[]
		for (var j = 0 ; j < col ; j++){
			var randomIndex = Math.floor(Math.random()*tictac.length)
			if (tictac[randomIndex] === 'X' && countX < 5){
				countX++
				temp.push(tictac[randomIndex])
			}else if (tictac[randomIndex] === 'O' && countO < 5){
				countO++
				temp.push(tictac[randomIndex])
			}else {
				j-=1
			}
		}
		result.push(temp)
	}
	return result
}

console.log(TicTacToe(3,3))