/**
 * Created by Catherine on 3/10/17.
 */

// var hello = "interesting";
// function example() {
//     var hello = "hi!";
//     console.log(hello);
// }

//declarations get hoisted
var hello;
function example() {
  hello = "hi";
  console.log(hello);
}
console.log('I adore you!');

// assignments and invocation maintain order
hello = "interesting";
example();
console.log(hello);

//problem1
// original code
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//     first_variable = "Not anymore!!!";
//     console.log(first_variable);
// }
// console.log(first_variable);

// Like the interpreter would see it
// so, first hoist (move up) any variable declaration
  // just declarations, not assignments
// then functions
function firstFunc() {
    first_variable = "Not anymore!!!";
    console.log(first_variable);
}
// then the rest -- Assignments here

firstFunc()
var first_variable = "Yipee I was first!";
console.log(first_variable);


//problem2
var food = "Chicken";
console.log(food);
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
    console.log(food);
}
eat();


//problem 3

var new_word = "old!";
function lastFunc() {
    new_word = "New";
    console.log(new_word);
}
console.log(new_word);
lastFunc();




