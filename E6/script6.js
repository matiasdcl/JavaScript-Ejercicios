function convertToFahrenheit(temp)
{
    let fahrenheit;
    fahrenheit = (temp * 9/5) + 32;
    return console.log(`${temp}° celsius equivalen a ${fahrenheit}° fahrenheit`);
}

function convertToCelsius(temp)
{
    let celsius;
    celsius = (temp - 32) * 5/9;
    let stringCelsius = celsius.toString();
    if (stringCelsius.length > 4)
    {
        stringCelsius = stringCelsius.substring(0,4);
        celsius = Number(stringCelsius);
    }
    return console.log(`${temp}° fahrenheit equivalen a ${celsius}° celsius`);
}

let celsiusToFahrenheit1 = 25;
let celsiusToFahrenheit2 = 40;
let celsiusToFahrenheit3 = 0;
let fahrenheitToCelsius1 = 100;
let fahrenheitToCelsius2 = 50;
let fahrenheitToCelsius3 = 0;

convertToFahrenheit(celsiusToFahrenheit1);
convertToFahrenheit(celsiusToFahrenheit2);
convertToFahrenheit(celsiusToFahrenheit3);
convertToCelsius(fahrenheitToCelsius1);
convertToCelsius(fahrenheitToCelsius2);
convertToCelsius(fahrenheitToCelsius3);