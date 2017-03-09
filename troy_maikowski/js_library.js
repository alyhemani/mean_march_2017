var _ = {
  map: function(arr, callback) {
    for (var i=0; i<arr.length; i++) {
      arr[i] = callback(arr[i]);
    }
    return arr;
  },
  reduce: function(arr, callback) {
    var memo = 0;
    for (var i=0; i<arr.length; i++) {
      memo = callback(memo, arr[i]);
    }
    return memo;
  },
  find: function(arr, callback) {
    for (var i=0; i<arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
    return false;
  },
  filter: function(arr, callback) {
    var result = [];
    for (var i=0; i<arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  },
  reject: function(arr, callback) {
    var result = [];
    for (var i=0; i<arr.length; i++) {
      if (!callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
}

console.log("MAP:", _.map([1,2,3,4,5], function(num) {
  return num*2;
}));

console.log("REDUCE:", _.reduce([1,2,3], function(memo, num) {
  return memo + num;
}));

console.log("FIND:", _.find([1,3,3,5,5,7,9,11,15,18], function(num) {
  return num % 2 == 0;
}));

console.log("FILTER:", _.filter([1,2,3,4,5,6], function(num) {
 return num % 2 == 0;
}));

console.log("REJECT:", _.reject([1,2,3,4,5,6], function(num) {
 return num % 2 == 0;
}));
