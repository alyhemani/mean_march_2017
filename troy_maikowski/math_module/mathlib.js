function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return num * num;
}

function random_num(num1, num2) {
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

module.exports = function() {
  return {
    add: add,
    multiply: multiply,
    square: square,
    random_num: random_num
  }
}
