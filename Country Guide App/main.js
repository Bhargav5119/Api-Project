let searchBtn = document.querySelector(".search_btn");
let countryInp = document.querySelector("#country_name")


// console.log(searchBtn, countryInp);

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let result = document.querySelector(".result")
    let countryName = countryInp.value;
    // countryName = "India"    
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`

    fetch(url).then(result => result.json()).then(data => {
        // console.log(data[0]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].name.common);
        // console.log(data[0].continents[0]);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        // console.log(Object.values(data[0].languages).toString().split(",").join(","));


        result.innerHTML = `
            <img src="${data[0].flags.svg}" class = "flag_img">
            <div class = "container">
                <h2>${data[0].name.common}</h2>
                <div class = "data_container">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
                <div class = "data_container">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
                <div class = "data_container">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
                <div class = "data_container">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                </div>
                <div class = "data_container">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
                <div class = "data_container">
                    <h4>Languages:</h4>
                    <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                </div>
            </div>
        `;

        countryInp.value = "";
        countryInp.focus();

    })
    .catch(error => {
        result.innerHTML = `<div class ="container" > <h3>Enter Valid Country </h3> </div> `
    })
})