

//temples json

var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open("GET","js/temples.json", true);

var temples = JSON.parse(request.resonseText);

document.getElementById("campinas.name").innerHTML = temples.temples[0].name;



//redirect to reservation page from index
document.getElementById("reservationBtn").onclick = function() {
    location.href = "reservation.html";

};

