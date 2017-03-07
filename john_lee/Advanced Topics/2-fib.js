function fib() {
  var number1 = 0;
  var number2 = 0;
  function nacci() {
    if( number1 == 0){
      number1 += 1;
      var result = number1
      console.log(result);
    }
    else if( number2 == 0){
      number2 += 1;
      var result = number2
      console.log(result);
    }
    else{
      var result = number1 + number2;
      number1 = number2
      number2 = result;
      console.log(result);
    }
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter() // should console.log "13"
fibCounter() // should console.log "21"
