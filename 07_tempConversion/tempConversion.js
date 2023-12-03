const convertToCelsius = function(temp) {
  let fahrenheitToCelsius = (temp - 32) * (5 / 9);
  fahrenheitToCelsius= fahrenheitToCelsius.toFixed(1);

  return Number(fahrenheitToCelsius);
};

const convertToFahrenheit = function(temp) {
  let celsiusToFahrenheit = temp * (9 / 5) + 32;
  celsiusToFahrenheit = celsiusToFahrenheit.toFixed(1);

  return Number(celsiusToFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
