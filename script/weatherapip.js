
let weatherRequest = new XMLHttpRequest();


weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/forecast?id=3467865&APPID=588f3b31c6fe7beb50679f8681db46fc", true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('currently').innerHTML = ((weatherData.list[0].main.temp - 273.15) * 9 / 5 + 32).toFixed(1);
    document.getElementById('high').innerHTML = ((weatherData.list[0].main.temp_max - 273.15) * 9 / 5 + 32).toFixed(1);
    document.getElementById('low').innerHTML = ((weatherData.list[0].main.temp_min - 273.15) * 9 / 5 + 32).toFixed(1);

    document.getElementById('humidity').innerHTML = weatherData.list[0].main.humidity;
    document.getElementById('windspeed').innerHTML = weatherData.list[0].wind.speed;
    //- 273.15 * 9 / 5 + 32;


    let x = ((weatherData.list[0].main.temp_max - 273.15) * 9 / 5 + 32);


    let y = weatherData.list[0].wind.speed;

    let result = 35.74 + 0.6215 * x - 35.75 * Math.pow(y, 0.16) + .4275 * x * Math.pow(y, 0.16);

    document.getElementById('output').innerHTML = result.toFixed(1);

    var weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );

    var counter = 0;
    var day = [];
    var tem = []
    var icon = [];
    for (i = 0; counter < 5; i++) {
        if (i % 7 == 0) {


            day[counter] = weekdays[new Date(weatherData.list[i].dt_txt).getDay()];
            tem[counter] = ((weatherData.list[i].main.temp - 273.15) * 9 / 5 + 32).toFixed(1);
            icon[counter] = weatherData.list[i].weather[0].icon;

            //alert("day[" + counter + "] is: " + day[counter]);
            //alert("tem[" + counter + "] is: " + tem[counter]);
            //alert("icon[" + counter + "] is: " + icon[counter]);
            //alert("i" + " is: " + i);


            counter++;


        }
    }


    document.getElementById('day1Day').innerHTML = day[0];
    document.getElementById('day2Day').innerHTML = day[1];
    document.getElementById('day3Day').innerHTML = day[2];
    document.getElementById('day4Day').innerHTML = day[3];
    document.getElementById('day5Day').innerHTML = day[4];

    document.getElementById('day1tem').innerHTML = tem[0];
    document.getElementById('day2tem').innerHTML = tem[1];
    document.getElementById('day3tem').innerHTML = tem[2];
    document.getElementById('day4tem').innerHTML = tem[3];
    document.getElementById('day5tem').innerHTML = tem[4];

    var icon1 = "<img src=\"http://openweathermap.org/img/w/" + icon[0] + ".png\">";
    var icon2 = "<img src=\"http://openweathermap.org/img/w/" + icon[1] + ".png\">";
    var icon3 = "<img src=\"http://openweathermap.org/img/w/" + icon[2] + ".png\">";
    var icon4 = "<img src=\"http://openweathermap.org/img/w/" + icon[3] + ".png\">";
    var icon5 = "<img src=\"http://openweathermap.org/img/w/" + icon[4] + ".png\">";

    document.getElementById('day1icon').innerHTML = icon1;
    document.getElementById('day2icon').innerHTML = icon2;
    document.getElementById('day3icon').innerHTML = icon3;
    document.getElementById('day4icon').innerHTML = icon4;
    document.getElementById('day5icon').innerHTML = icon5;



}
