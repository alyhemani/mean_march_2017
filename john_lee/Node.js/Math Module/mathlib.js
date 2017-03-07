module.exports = function (){
  return {
    addition: function(num1, num2) {
         var result = 0;
         result = num1 + num2;
         console.log(result);
    },
    multiply: function(num1, num2) {
      var result = 0;
      result = num1 * num2;
      console.log(result);
    },
    square: function(num) {
      var result = 0;
      result = num * num;
      console.log(result);
    },
    random: function(num1, num2) {
      if (arguments.length == 1) {
        num2 = num1;
        num1 = 0;
      }
      num2 = num2 || 0;
      for (var arr = []; (num2 - num1)> 0; num1 += 1) {
        arr.push(num1);
      }
      i=Math.floor(Math.random()*arr.length)
      returned = arr[i]
      console.log(returned);
    }
  }
};
