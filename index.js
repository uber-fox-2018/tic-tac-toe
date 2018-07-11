function ticTacToe(rows, cols){
    var table=[];
    var countX=5;
    var countO=4;
    var numRandom;
    for(var i=0;i<rows;i++){
        var box=[];
        for(var j=0;j<cols;j++){
            numRandom = Math.floor(Math.random() * 2);
            if(numRandom===0 && countO>0){
                box.push("O");
                countO--;
            }else{
                if(countX>0){
                    box.push("X");
                    countX--;
                }else{
                    numRandom=0;
                    box.push("O");
                    countO--;
                }
            }
        }
        table.push(box);
        box=[];
    }
    return table;
}
console.log(ticTacToe(3,3));
//Please be noted that it will be randomised, but the total of "O"" is always 4 and the total of "X" is always 5 
//[ [ 'X', 'X', 'X' ], [ 'O', 'X', 'O' ], [ 'X', 'O', 'O' ] ]