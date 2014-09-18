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
    
    




