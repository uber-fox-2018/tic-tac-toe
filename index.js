function ticTacToe() {
    
    let result = []
    let seq = []
    let randomSeq = getArrayOfRandomNumber(9);

    let i = 0;
    let j = 0;
    let row = [];
    while(i < randomSeq.length) {
        if ((randomSeq[i]+1) % 2 !== 0) {
            row.push('X')
            j++
        }
        else {
            row.push('O')
            j++
        }
        if(j === 3) {
            result.push(row);
            row = [];
            j = 0;
        }
        i++
    }

    return result;
}

function getArrayOfRandomNumber(arrayLength) {
    let result = [];
    for (let i = 0; i < arrayLength; i++)
        result.push(i);

    let temp;
    let len = arrayLength;
    while (len) {
        i = Math.floor(Math.random() * len--);
        temp = result[len];
        result[len] = result[i];
        result[i] = temp;
    }

    return result;
}

console.log(ticTacToe());
