function VehicleConstructor(name, wheels,speed, passengers){
  this.name = name;
  this.wheels = wheels;
  this.speed = speed;
  this.passengers = passengers;
  this.makeNoise = function(){
    console.log("beep beep");
  }
  var distance_travelled = 0;
  var updateDistanceTravelled= function() {
    distance_travelled += speed;
  }
  this.move = function(){
    console.log(updateDistanceTravelled());
  };
  this.checkMiles = function(){
    console.log(distance_travelled);
  };

}

var bike = new VehicleConstructor("bike", 2, 1)
bike.makeNoise = function(){
  console.log("Ring ring");
}
 var sedan = new VehicleConstructor('Sedan', 4, 7)
 sedan.makeNoise = function(){
   console.log("Honk Honk");
 }
var bus = new VehicleConstructor("bus", 8, 20)
bus.pickup = function (){
  this.passengers += 1;
}
bike.makeNoise()
sedan.makeNoise()
