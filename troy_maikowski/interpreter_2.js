var food;

function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}


var food = "Chicken";

eat();
console.log(food);
