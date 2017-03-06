//Functions
function runningLogger(){
  console.log('I am running!');
}

function multiplyByTen (value){
  result = value*10
  return result
}

function stringReturnOne(){
  return "The returned String One"
}

function stringReturnTwo(){
  return "The returned String Two"
}

function caller (parameter) {
 console.log(typeof(parameter))
}

function caller (parameter) {
  if(typeof(parameter) == 'function'){
    parameter()
  }
  else{
    return parameter;
  }
}

function myDoubleConsoleLog (param1, param2) {
  if(typeof(param1) == 'function' && typeof(param2) == 'function'){
    console.log(param1());
    console.log(param2());
  }
  else{
    return parameter;
  }
}

function caller2 (parameter) {
  if(typeof(parameter) == 'function'){
    console.log('Starting')
    setTimeout(function(){
      parameter()
    }, 2000);
  }
}
//Results
runningLogger()
console.log(multiplyByTen(5))
console.log(stringReturnOne())
console.log(stringReturnTwo())
caller(runningLogger)
myDoubleConsoleLog(stringReturnOne, stringReturnTwo)
caller2(runningLogger)
