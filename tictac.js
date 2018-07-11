function random (row,col){
var alphabet = 'ox'
var hasil = []
var kondisiO = 0
var kondisiX = 0
for (var i=0 ; i < row ; i++){
  var tampung = []
  for (var j=0 ; j < col ; j++){
    tampung.push(alphabet[Math.round(Math.random() * 1)])
    if (tampung[j] == 'x'){
      kondisiX +=1
    }
    else if (tampung[j] == 'o') {
      kondisiO +=1
    }

    if (kondisiO >=5){
      tampung[j] = 'x'
    }
    else if (kondisiX >=5) {
      tampung[j] = 'o'
    }
  }
  hasil.push(tampung)
}
return hasil
}

console.log(random(3,3))

