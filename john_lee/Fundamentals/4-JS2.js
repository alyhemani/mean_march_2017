var Sum = function(x,y){
  var sum = 0
  for( var i = x; i<=y; i++){
    sum += i
  }
  return sum
}

var Min = function(arr){
  var min = arr[0]
  for( var i = 0; i< arr.length; i++){
    if(arr[i]<min){
      min = arr[i]
    }
  }
  return min
}

var Avg = function(arr){
  var sum = 0
  for( var i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  var avg = sum/arr.length
  return avg
}

var Calculator = {
 Sum:function(x,y){
   var sum = 0
   for( var i = x; i<=y; i++){
     sum += i
   }
   return sum
 },
 Min:function(arr){
   var min = arr[0]
   for( var i = 0; i< arr.length; i++){
     if(arr[i]<min){
       min = arr[i]
     }
   }
   return min
 },
 Avg:function(arr){
   var sum = 0
   for( var i = 0; i < arr.length; i++){
     sum += arr[i]
   }
   var avg = sum/arr.length
   return avg
 },
}

var person = {
  name: "John Lee",
  distance_traveled: 0,
  say_name: function(){
    console.log(person.name);
  },
  say_something: function(phrase){
    console.log(person.name + ' says:' + phrase);
  },
  walk: function(){
    console.log(person.name + ' is walking!');
    person.distance_traveled += 3;
    return person;
  },
  run: function(){
    console.log(person.name + ' is running!');
    person.distance_traveled += 10;
    return person;
  },
  crawl: function(){
    console.log(person.name + ' is crawling!');
    person.distance_traveled += 1;
    return person;
  }
}
