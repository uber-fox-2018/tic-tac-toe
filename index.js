/*
Buatah function yang akan membuat nested array 3 x 3, yang isinya 'x' dan 'o' secara acak, namun dengan jumlah yang seimbang. Jumlah yang seimbang adalah memiliki 5 'x' dan 4 'o' ATAU 4 'x' 5 'o'.
*/
function ticTacToe (){
    var abjad = 'xo'
    var result = []
    for(var i = 0 ; i < 3 ; i++){
        var arr = []
        for(var j = 0 ; j < 3 ; j++){
            var random = abjad.charAt(Math.floor(Math.random() * abjad.length))
            arr.push(random)
        }
        result.push(arr)
    }
    console.log(result)
}

ticTacToe()
