

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

       let infoObject = fetchFunction(inputValue, keyValue);


       console.log(infoObject)
    })
})


function getInputValue () {

    const   input = document.getElementById("input");

    let inputVal = input.value.trim().split(" ").join("");

    return inputVal;
}


function fetchFunction(input, key) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`;

    fetch(url, {method : "GET"})
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
}