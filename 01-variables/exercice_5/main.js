// Exercice 5
// Écrivez votre code ici

let celsius = 25; // Température en degrés Celsius
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32; 
}

console.log(celsiusToFahrenheit(celsius)); // Affiche la température en degrés Fahrenheit

module.exports = { celsius, celsiusToFahrenheit };
