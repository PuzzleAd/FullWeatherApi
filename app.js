

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

let formArray = [];

formArray.push(form1);
formArray.push(form2);


formArray.forEach(function (element) {
    element.addEventListener("submit", function (event) {
        event.preventDefault();

        let inputValue = getInputValue();
        const keyValue = "d19e9cd890dd5522e26007e2f66e02ee"; 

        cityName(inputValue);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${keyValue}`;

        fetch(url, {method : "GET"})
            .then((response) => response.json())
            .then((data) => {
                currentTemp(data.main.temp);
                weatherDetails(data.main.temp_max, data.main.temp_min, data.main.humidity, data.wind.speed);
            }).catch((err) => console.error(err));

    })
})


function getInputValue () {

    const   input = document.getElementById("input");

    let inputVal = input.value.trim().split(" ").join("");

    return inputVal;
}

function cityName(input) {
    const cityText = document.getElementById("cityText");

    cityText.textContent = input[0].toUpperCase() + input.slice(1);
}


function currentTemp(curr) {
    const currTemp = document.getElementById("currTemp");

    currTemp.textContent = `${Math.round((curr - 32) / 1.8)}°`
}

function weatherDetails (max, min, hum, wind) {

    const tempMax = document.getElementById("tempMax");
    tempMax.textContent = `${Math.round((max - 32) / 1.8)}°`;

    const tempMin = document.getElementById("tempMin");
    tempMin.textContent = `${Math.round((min - 32) / 1.8)}°`;

    const humidity = document.getElementById("humidity");
    humidity.textContent = `${hum}%`;

    const windSpeed = document.getElementById("windSpeed");
    windSpeed.textContent = `${wind} km/h`;
}