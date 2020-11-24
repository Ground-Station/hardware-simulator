const fs = require('fs')

// fueling
var fuelingDuration = 2; // in minutes
var fuelingDataPerSecond = 2;
var fuelingDataAmount = 60*fuelingDataPerSecond*fuelingDuration;

// flight
var flightDuration = 8; // in minutes
var flightDataPerSecond = 1;
var flightDataAmount = 60*flightDataPerSecond*flightDuration;

// variables
var height = 0;
var pressure = 110000;
var temperature = 23;
var latitude = 15.989410;
var longitude = 48.045173;
var velocity = 0;
var weight = 14.3;

var dataString = "";

function format (number, length, afterDot){
  number = number.toFixed(afterDot);
  var my_string = '' + number;
  while (my_string.length < length) {
      my_string = '0' + my_string;
  }
  return my_string;
}

function heightSimulation(i){
  if (i <= (flightDataAmount*0.4)){
    height = (height+(Math.random()*10)+1)
    if (height > 1200){
      return format(1100, 7, 2)
    }else{
      return format(height, 7, 2)
    }
  } else {
    height = (height-(Math.random()*10)+1)
    if (height < 0){
      return format(0, 7, 2)
    }else{
      return format(height, 7, 2)
    }
  }
}

function pressureSimulation(i){
  if (i <= (flightDataAmount*0.4)){
    pressure = (pressure-(80*(Math.random()*10)+1))
    if (pressure < 30000){
      return format(30000, 9, 2)
    }else{
      return format(pressure, 9, 2)
    }
  } else {
    pressure = (pressure+(60*(Math.random()*10)+1))
    if (pressure > 110000){
      return format(110000, 9, 2)
    }else{
      return format(pressure, 9, 2)
    }
  }
}


function temperatureSimulation(i){
  if (i <= (flightDataAmount*0.5)){
    temperature = temperature+(0.2*Math.random())
    return format(temperature, 4, 2)
  } else {
    temperature = temperature-(0.1*Math.random())
    return format(temperature, 4, 2)
  }
}


function latitudeSimulation(i){
  if (Math.random() > 0.5){
    latitude = latitude+(0.1*Math.random())
    return -(format(latitude, 10, 5))
  } else {
    latitude = latitude-(0.1*Math.random())
    return -(format(latitude, 10, 5))
  }
}


function longitudeSimulation(i){
  if (Math.random() > 0.5){
    longitude = longitude+(0.1*Math.random())
    return -(format(longitude, 10, 5))
  } else {
    longitude = longitude-(0.1*Math.random())
    return -(format(longitude, 10, 5))
  }
}


function velocitySimulation(i){
  if (i <= (flightDataAmount*0.4)){
    velocity = (velocity+((0.2*Math.random())))
    if (velocity > 25){
      return format(25, 6, 2)
    }else{
      return format(velocity, 6, 2)
    }
  } else {
    velocity = (velocity-((0.1*Math.random())))
    if (velocity < 0){
      return format(0, 6, 2)
    }else{
      return format(velocity, 6, 2)
    }
  }
}


function weightSimulation(i){
  if (i <= (fuelingDataAmount*0.35)){
    weight = weight+(0.1*Math.random())
    return format(weight, 4, 2)
  }else{
    return format(weight, 4, 2)
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function hardwareSimulator(){
  for (var i = 0; i < fuelingDataAmount; i++) {
    fuelingSimulation = (weightSimulation(i).toString()+'\r\n');
    console.log(fuelingSimulation);
    fs.appendFile('fuelingSimulation.txt', fuelingSimulation, (err) => { 
      if (err) throw err; 
  }) 
    await sleep(100);
  }
  for (var i = 0; i < flightDataAmount; i++) {
    flightSimulation = (latitudeSimulation(i).toString()+','+
              longitudeSimulation(i).toString()+','+
              temperatureSimulation(i).toString()+','+
              pressureSimulation(i).toString()+','+
              heightSimulation(i).toString()+','+
              velocitySimulation(i).toString()+'\r\n'
             );
    console.log(flightSimulation);
    fs.appendFile('flightSimulation.txt', flightSimulation, (err) => { 
      if (err) throw err; 
  }) 
    await sleep(100);
  }
}

hardwareSimulator();