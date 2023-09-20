function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("temperatureInput").value);
    const selectedUnit = document.getElementById("unitSelect").value;
    let convertedTemperature;
    let resultUnit;

    if (isNaN(inputTemperature)) {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
        return;
    }

    if (selectedUnit === "celsius") {
        convertedTemperature = (inputTemperature * 9/5) + 32;
        resultUnit = "Fahrenheit";
    } else if (selectedUnit === "fahrenheit") {
        convertedTemperature = (inputTemperature - 32) * 5/9;
        resultUnit = "Celsius";
    } else if (selectedUnit === "kelvin") {
        convertedTemperature = inputTemperature - 273.15;
        resultUnit = "Celsius";
    }

    document.getElementById("result").innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
