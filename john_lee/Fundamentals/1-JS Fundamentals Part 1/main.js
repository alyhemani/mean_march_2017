//#1
 x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
 for( var i = 0; i < x.length; i++){
   console.log(x[i]);
 }
//#2
x2 = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
x2.push(100);
console.log(x2);
//#3
x3 = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
newarr = ["hello", "world", "JavaScript is Fun"]
x3.push(newarr)
console.log(x3)
//#4
var sum = 0
for( var i = 1; i<501; i++){
  sum += i
}
console.log(sum)
//$5
arr =  [1, 5, 90, 25, -3, 0]
var min = arr[0]
for( var i = 0; i< arr.length-1; i++){
  if(arr[i]<min){
    min = arr[i]
  }
}
console.log(min)
//#6
arr =  [1, 5, 90, 25, -3, 0]
var sum = 0
for( var i = 0; i< arr.length-1; i++){
  sum += arr[i]
}
var avg = sum/arr.length
console.log(avg)
//#7
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', 
 dojo: 'Dallas'
}
for ( var key in newNinja){
  console.log(key, newNinja[key]);
}
