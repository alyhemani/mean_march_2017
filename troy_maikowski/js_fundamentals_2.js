//Standalone functions

function sumNums(x, y) {
  var sum = 0;
  for (var i=x; i<=y; i++) {
    sum += i;
  }
  console.log(sum);
}

function findMin(arr) {
  var min = arr[0];
  for (var i=1; i<arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min
}

function getAvg(arr) {
  var total = 0;
  for (var i=0; i<arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

//Assigned to variables

var sumNums = function(x, y) {
  var sum = 0;
  for (var i=x; i<=y; i++) {
    sum += i;
  }
  console.log(sum);
}

var findMin = function (arr) {
  var min = arr[0];
  for (var i=1; i<arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min
}

var getAvg = function(arr) {
  var total = 0;
  for (var i=0; i<arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

//Methods of an object

obj = {
  sumNums: function(x, y) {
    var sum = 0;
    for (var i=x; i<=y; i++) {
      sum += i;
    }
    console.log(sum);
  },
  findMin: function(arr) {
    var min = arr[0];
    for (var i=1; i<arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }
    return min
  },
  getAvg: function(arr) {
    var total = 0;
    for (var i=0; i<arr.length; i++) {
      total += arr[i];
    }
    return total / arr.length;
  }
}

//Person object

var person = {
  name: "Troy Maikowski",
  distance_traveled: 0,
  say_name: function() {
    console.log(this.name);
    return this;
  },
  say_something: function(saying) {
    console.log(`${this.name} says ${saying}`);
    return this;
  },
  walk: function() {
    console.log(`${this.name} is walking`);
    this.distance_traveled += 3;
    return this;
  },
  run: function() {
    console.log(`${this.name} is running`);
    this.distance_traveled += 10;
    return this;
  },
  crawl: function() {
    console.log(`${this.name} is crawling`);
    this.distance_traveled += 1;
    return this;
  },
}
