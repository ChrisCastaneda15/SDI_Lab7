/*
    Christian Castaneda
    September 18th, 2014
    SDI
    Lab 7
 */

// Object
    var car = 
    {
       make: "Ferrari",
       model: "458 Italia",
       year: 2013,
       color: "Red",
       horsePower: 570,
       topSpeed:202,
       currentSpeed: 0,
       accelerate: function()
       {
           this.currentSpeed = this.currentSpeed + 50;
       },
       decelerate: function()
       {
           this.currentSpeed = this.currentSpeed - 25;
       }
       
    };
    
    
 // MAIN
 
    console.log("Today you will be testing the " + car.year +  " " + car.make + " " + car.model + ".");
    console.log("This " + car.color + " " + car.make + " has " + car.horsePower + "HP and boasts a top speed of " + car.topSpeed + " MPH.");    
    console.log("Currently the car is at " + car.currentSpeed + "MPH, but we can easily change that stepping on the gas pedal.\nLet's start her up.");
    
    // acceleration
    for (var i = 0; i < 3; i++) 
    {
      car.accelerate();
      console.log(car.currentSpeed + "MPH");
    };
   
   console.log("We are currently sitting at " + car.currentSpeed + "MPH. Let's slow down a bit.");
   
// deceleration
    for (var i = 0; i < 3; i++) 
    {
      car.decelerate();
      console.log(car.currentSpeed + "MPH");
    };
    
    console.log("We are now cruising at " + car.currentSpeed + "MPH. Let's bring it to a complete stop now.");
    
// stop
    
   for (var i = 0; i < 3; i++) 
    {
      car.decelerate();
      console.log(car.currentSpeed + "MPH");
    };
    
    console.log("OK, so we now have the car at a complete stop with " + car.currentSpeed + "MPH.\nCongratulations!");
    
    




