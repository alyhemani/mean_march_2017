function VehicleConstructor(name, wheel, passenger){
  var car = {};
  car.name = name;
  car.wheel = wheel;
  car.passenger = passenger;

  car.makeNoise = function() {
    console.log("Vroom Vroom")
  }
  return car;
}

var Bike = VehicleConstructor("Bike", 2, 1);
Bike.makeNoise = function() {
  console.log("Ring Ring!")
}
Bike.makeNoise()

var Sedan = VehicleConstructor("Sedan",4,4);
Sedan.makeNoise = function() {
  console.log("Honk Honk!")
}
Sedan.makeNoise()

var Bus = VehicleConstructor("Bus",4,40);
Bus.riding = 0
Bus.addrider = function(num){
  Bus.riding += num;
  console.log(Bus.riding + " people are now riding the bus.")
  return Bus
}
Bus.addrider(10)
Bus.addrider(10)
Bus.addrider(10)
