function VehicleConstructor(name, numWheels, numPassengers, speed) {

  var distanceTraveled = 0;
  var self = this;
  function updateDistance() {
    distanceTraveled += self.speed
  }

  this.name = name;
  this.numWheels = numWheels;
  this.numPassengers = numPassengers;
  this.speed = speed;

  this.makeNoise = function() {
    console.log("VRROOOOMMMMMMMM!!");
  }

  this.move = function() {
    updateDistance();
    this.makeNoise;
  }

  this.checkMiles = function() {
    return distanceTraveled;
  }

}
var bike = new VehicleConstructor("Bike", 2, 1, 5);
bike.makeNoise = function() {
  console.log("ring ring!");
}

var sedan = new VehicleConstructor("Sedan", 4, 4, 50);
sedan.makeNoise = function() {
  console.log("Honk Honk!");
}
var bus = new VehicleConstructor("Bus", 4, 60, 30);
bus.passengerCount = 0;
bus.pickUp = function(num) {
  this.passengerCount += num;
}

bike.makeNoise();
bike.move();
bike.move();
console.log("Miles:", bike.checkMiles());
console.log(bike);
