var hello = "interesting";
function example() {
  var hello = "hi!";
  console.log(hello);
}
example();
console.log(hello);
//declarations get hoisted
var hello;
function example() {
  var hello;
  hello = "hi";
  console.log(hello);
}
//assignments and invocation maintain order
hello = "interesting";
example();
console.log(hello);


//Problem #1
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
//REARRANGED
var first_variable;
function firstFunc(){
  var first_variable;
  first_variable ="Not anymore!!";
  console.log(first_variable);
}
//ASSIGNMENTS
console.log(first_variable); //undefined
first_variable = "Yipee I was first!";
console.log(first_variable);


//Problem #2
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
  console.log(food);
}
eat();
console.log(food);
//REARRANGED
var food;
function eat(){
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}
//ASSIGNMENTS
food = "Chicken";
eat();
console.log(food);


//Problem #3
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
//REARRANGED
var new_word;
funtion lastFunc() {
  new_word = "old"
}

//ASSIGNMENTS
new_word = "NEW!";
console.log(new_word);
