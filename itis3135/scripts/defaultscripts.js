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

// TODO: WRITE JAVASCRIPT FUNCTION TO UPDATE URL OF VALIDATOR