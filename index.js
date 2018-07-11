function tictactoe(num = 3) {
    if(num !== 3) {
        return "Tic Tac Toe harus bernilai 3 x 3";
    }

    var player = ['x', 'o'];
    var x = 0;
    var o = 0;

    var board = [];
    for(let i = 0; i < num; i++) {
        var boardInside = [];
        for(let j = 0; j < num; j++) {
            let acak = Math.floor(Math.random() * player.length);
            let acakXO = player[acak];

            // jika x sudah 5 maka harus ganti jadi o
            if(x >= 5) {
                boardInside.push('o');
            } else if(o >= 5) {
                boardInside.push('x');
            } else {
                // jika random adalah x maka nilai x di tambah 1
                if(acakXO == 'x') {
                    x++
                } else {
                    o++
                }
                boardInside.push(acakXO);            
            }            
        }
        board.push(boardInside);
    }
    return board;
}

console.log(tictactoe());