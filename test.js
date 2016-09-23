// from https://github.com/rbartoli/nodeimu-server/blob/master/index.js

var nodeimu = require('nodeimu');

let IMU = new nodeimu.IMU()
let lastMeasure

function getSensorData() {
  let tic = new Date()
  let data = IMU.getValueSync()
  let toc = new Date()
  let measure
  
  if (data.temperature && data.pressure && data.humidity) {
    measure = {
      d: new Date(),
      t: parseFloat(data.temperature.toFixed(2)),
      p: parseFloat(data.pressure.toFixed(2)),
      h: parseFloat(data.humidity.toFixed(2))
    }
    
    lastMeasure = measure;
  }
  
  setTimeout(getSensorData, 5000 - (toc - tic))
}

console.log(getSensorData())