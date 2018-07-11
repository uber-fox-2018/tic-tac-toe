function ticTac(num){

  let result = []
  let xJumlah = 0
  let oJumlah = 0

  //Agar dinamis
  let xBatas = Math.ceil((num*num)/2)
  let oBatas = Math.floor((num*num)/2)

  for(let i = 0; i < num; i++){
      let tmp = []
      for(let j = 0; j < num; j++){
          let randomXO = Math.round(Math.random()) 
          if(randomXO % 2 === 0 && xJumlah < xBatas){
              tmp.push('x')
              xJumlah++
          } else {
              if(oJumlah < oBatas){
                  tmp.push('o')
                  oJumlah++
              } else {
                  tmp.push('x')
                  xJumlah++
              }
          }
      }
      result.push(tmp)
  }
  return result
}

console.log(ticTac(3))
console.log(ticTac(4))