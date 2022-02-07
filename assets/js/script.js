var countryCode = "";

function displaySearches(){
    var searchInput = document.getElementById("search").value;
    console.log(searchInput);
    let city = document.createElement('div');
    city.textContent = searchInput;
    city.className = "form-control cities";
    const cityList = document.querySelector("#city-list");
    cityList.appendChild(city);
    var geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=1&APPID=787671fc26249bbf585fc70ccf0bc37c`
    fetch(geocodingUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            countryCode = data[0]["country"];
            console.log(countryCode);
        })
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput},${countryCode}&id=524901&cnt=5&units=imperial&APPID=7919ba39f5ff5106821570045e5ebf51`
    console.log(fetch(requestUrl))
    fetch(requestUrl)
        .then(function(response){
            console.log(response)
            return response.json();
        })  
        .then(function(data){
            let date = data['list'][0]['dt_txt']
            let name= data['city']['name']
            let temp = data['list'][0]['main']['temp']
            let wind = data['list'][0]['wind']['speed']
            let humidity = data['list'][0]['main']['humidity']
            let skies = data['list'][0]['weather'][0]['description']
            let cityDate = document.querySelector("#city-date");
            let cityTemp = document.querySelector(".temp")
            let cityWind = document.querySelector(".wind")
            let cityHumidity = document.querySelector(".humidity")
            let citySkies = document.querySelector(".skies")
            cityDate.innerText = name + " (" + date + ")";
            cityTemp.innerText = "Temperature: " + temp;
            cityWind.innerText = "Wind: " + wind + "mph" 
            cityHumidity.innerText = "Humidity: " + humidity
            citySkies.innerText = "Sky: " + skies
            console.log(data)
        })
        
};


$("#btn").on("click", function(){
    displaySearches();
});

