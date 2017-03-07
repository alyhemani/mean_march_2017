function runningLogger() {
  console.log("I am running!")
}

function multiplyByTen(num) {
  return num * 10;
}

multiplyByTen(5);

function stringReturnOne() {
  return "Hello";
}

function stringReturnTwo() {
  return "World!";
}

function caller(param) {
  if (typeof(param) == 'function') {
    param()
  }
}

function myDoubleConsoleLog(param1, param2) {
  if (typeof(param1) == 'function' && typeof(param2) == 'function') {
    console.log(param1(), param2());
  }
}

function caller2(param) {
  console.log("Starting");
  setTimeout(function() {
    if (typeof(param) == 'function') {
      param();
    }
  }, 2000);
  console.log("ending?");
  return interesting;
}

caller2(myDoubleConsoleLog);
