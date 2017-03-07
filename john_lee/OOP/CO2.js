function VehicleConstructor(name, wheel, passenger, speed){
  var self = this;
  var distance_travelled = 0;
  function updateDistanceTravelled() {
    distance_travelled += self.speed;
  }
  this.name = name;
  this.wheel = wheel;
  this.passenger = passenger;
  this.speed = speed;
  this.makeNoise = function() {
    console.log("Vroom Vroom");
  }
  this.move = function() {
    updateDistanceTravelled();
    this.makeNoise();
  }
  this.checkMiles = function() {
    return distance_travelled;
  }
}

var Bike = new VehicleConstructor("Bike", 2, 1,15);
Bike.makeNoise = function() {
  console.log("Ring Ring!")
}
Bike.makeNoise();
console.log(Bike.checkMiles());
Bike.move();
console.log(Bike.checkMiles());


var Sedan = new VehicleConstructor("Sedan",4,4,80);
Sedan.makeNoise = function() {
  console.log("Honk Honk!")
}
Sedan.makeNoise()

var Bus = new VehicleConstructor("Bus",4,40,60);
Bus.riding = 0
Bus.addrider = function(num){
  Bus.riding += num;
  console.log(Bus.riding + " people are now riding the bus.")
  return Bus
}
