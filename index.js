/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const valueEl = document.getElementById("value")

const convertBtn = document.getElementById("convert-btn")
const convertedLength = document.getElementById("converted-length")
const convertedVolume = document.getElementById("converted-volume")
const convertedMass = document.getElementById("converted-mass")

convertBtn.addEventListener("click", function() {
    const value = Number(valueEl.value)
    metricImperialConversion(value)
})

function metricImperialConversion(value) {
    convertedLength.textContent = `${value} meters = ${lengthConversion(value,"meters")} feet | ${value} feet = ${lengthConversion(value,"feet")} meters`
    convertedVolume.textContent = `${value} liters = ${volumeConversion(value,"liters")} gallons | ${value} gallons = ${volumeConversion(value,"gallons")} liters`
    convertedMass.textContent = `${value} kilos = ${massConversion(value,"kilos")} pounds | ${value} pounds = ${massConversion(value,"pounds")} kilos`
}

function lengthConversion(value, unitToConvert) {
    if (unitToConvert === "meters")
        return (value * 3.281).toFixed(3)
    else if (unitToConvert === "feet")
        return (value / 3.281).toFixed(3)
}

function volumeConversion(value, unitToConvert) {
    if (unitToConvert === "liters")
        return (value * 0.264).toFixed(3) 
    else if (unitToConvert === "gallons")
        return (value / 0.264).toFixed(3) 
}

function massConversion(value, unitToConvert) {
    if (unitToConvert === "kilos")
        return (value * 2.204).toFixed(3) 
    else if (unitToConvert === "pounds")
        return (value / 2.204).toFixed(3)
}