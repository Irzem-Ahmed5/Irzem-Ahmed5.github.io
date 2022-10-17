window.onload = function () {
    var date = new Date();
    var day = date.toDateString();
    var time = date.toLocaleTimeString();
    document.getElementById("date").innerHTML = time + " -- " + day;
}

function nameAndFeeling() {
    const name = document.getElementById("name").value;
    const feeling = document.getElementById("feeling").value;
    console.log(name);
    console.log(feeling);
    document.getElementById("nameAndFeeling").innerHTML = "Welcome " + name + "! You are feeling " + feeling + ".";
}

function ageInDays() {
    const age = document.getElementById("age").value;
    let daysInAge = age * 365.25;
    document.getElementById("displayAgeInDays").innerHTML = daysInAge + " days!";
}

function timeToWinter() {
    var winterBreak = new Date("2022,12,16").getTime();

    var now = new Date().getTime();

    var difference = winterBreak - now;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("time-till-winter-break").innerHTML = days + " Days left"
}

// TODO: WRITE JAVASCRIPT FUNCTION TO UPDATE URL OF VALIDATOR