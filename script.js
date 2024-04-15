// Conversion functions
function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    switch (inputUnit) {
        case 'meter':
            outputValue = meterTo(outputUnit, inputValue);
            break;
        case 'centimeter':
            outputValue = centimeterTo(outputUnit, inputValue);
            break;
        case 'kilometer':
            outputValue = kilometerTo(outputUnit, inputValue);
            break;
        case 'millimeter':
            outputValue = millimeterTo(outputUnit, inputValue);
            break;
        case 'micrometer':
            outputValue = micrometerTo(outputUnit, inputValue);
            break;
        case 'nanometer':
            outputValue = nanometerTo(outputUnit, inputValue);
            break;
        case 'mile':
            outputValue = mileTo(outputUnit, inputValue);
            break;
        case 'yard':
            outputValue = yardTo(outputUnit, inputValue);
            break;
        case 'foot':
            outputValue = footTo(outputUnit, inputValue);
            break;
        case 'inch':
            outputValue = inchTo(outputUnit, inputValue);
            break;
        case 'lightyear':
            outputValue = lightyearTo(outputUnit, inputValue);
            break;
        default:
            outputValue = 'Invalid input unit';
    }

    document.getElementById('outputValue').value = outputValue;
}

// Length conversion formulas
function meterTo(unit, value) {
    switch (unit) {
        case 'meter':
            return value;
        case 'centimeter':
            return value * 100;
        case 'kilometer':
            return value / 1000;
        case 'millimeter':
            return value * 1000;
        case 'micrometer':
            return value * 1e6;
        case 'nanometer':
            return value * 1e9;
        case 'mile':
            return value * 0.000621371;
        case 'yard':
            return value * 1.09361;
        case 'foot':
            return value * 3.28084;
        case 'inch':
            return value * 39.3701;
        case 'lightyear':
            return value * 1.057e-16;
        default:
            return 'Invalid output unit';
    }
}

// Implement conversion functions for other length units similarly

// You can also add functions for other types of units like weight, temperature, etc.
