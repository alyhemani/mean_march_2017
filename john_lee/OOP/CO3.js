function VehicleConstructor(name, wheel, passenger, speed){
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  this.distance_travelled = 0;
  this.name = name;
  this.wheel = wheel;
  this.passenger = passenger;
  this.speed = speed;
  this.vin = createVIN();
  function createVIN(){
    var vin = ''
    for (var i = 0; i < 18; i+=1){
      vin += chars[Math.floor(Math.random()*35+1)]
    }
    return vin;
  }
}

VehicleConstructor.prototype.makenoise = function() {
    console.log("Vroom Vroom");
    return this;
  }
VehicleConstructor.prototype.move = function() {
  this.makeNoise();
  this.updateDistanceTravelled();
  return this;
}
VehicleConstructor.prototype.checkMiles = function() {
  return this.distance_travelled;
}
VehicleConstructor.prototype.updateDistanceTravelled = function() {
  this.distance_travelled += this.speed;
}


var Bike = new VehicleConstructor("Bike", 2, 1,15);
Bike.makeNoise = function() {
  console.log("Ring Ring!")
}


var Sedan = new VehicleConstructor("Sedan",4,4,80);
Sedan.makeNoise = function() {
  console.log("Honk Honk!")
}

var Bus = new VehicleConstructor("Bus",4,40,60);
Bus.riding = 0
Bus.addrider = function(num){
  Bus.riding += num;
  console.log(Bus.riding + " people are now riding the bus.")
  return Bus
}
