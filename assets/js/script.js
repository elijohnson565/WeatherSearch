var displaySearches = function(){
    let searchInput = document.getElementById("search").value;
    console.log(searchInput);
    let city = document.createElement('div');
    city.textContent = searchInput;
    city.className = "form-control cities";
    const cityList = document.querySelector("#city-list");
    cityList.appendChild(city);
};

$("#btn").on("click", function(){
    displaySearches();
});