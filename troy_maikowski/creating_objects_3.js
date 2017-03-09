function VehicleConstructor(name, numWheels, numPassengers, speed) {

  var distanceTraveled = 0;
  var self = this;

  this.getDistance = function() {
    return distanceTraveled;
  }

  this.updateDistance = function() {
    distanceTraveled += this.speed;
  }

  this.getMiles = function() {
    return distanceTraveled;
  }

  this.name = name;
  this.numWheels = numWheels;
  this.numPassengers = numPassengers;
  this.speed = speed;
}

//Prototypes

VehicleConstructor.prototype.makeNoise = function() {
  console.log("VVRRRROOOOMMMMMMM!!!")
}

VehicleConstructor.prototype.move = function() {
  this.updateDistance();
  this.makeNoise();
}

VehicleConstructor.prototype.checkMiles = function() {
  return this.getMiles();
}

VehicleConstructor.prototype.generateVinNum = function() {
  var vin = ""
  for (var i=0; i<10; i++) {
    vin += Math.floor(Math.random() * 9);
  }
  this.vin = vin;
}

////////////

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

bike.generateVinNum();
console.log(bike.vin);
