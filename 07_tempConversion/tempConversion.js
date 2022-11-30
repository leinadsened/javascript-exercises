const convertToCelsius = function(farenheitTemp) {
  let celsiusTemp = Math.round(((farenheitTemp-32)*5/9)*10)/10;
  return celsiusTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  let farenheitTemp = Math.round(((celsiusTemp*9/5)+32)*10)/10;
  return farenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
