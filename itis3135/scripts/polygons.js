

function promptUser() {
    let sides = prompt("The Mighty albatross asks thee for the number of sides of thine polygon: ");
    validateEntry(sides);
}

function validateEntry(sides) {
    if (isNaN(sides) || sides > 10 || sides < -11) {
        alert("Kernel Panic! Jk you need to enter a number between 0 and 10")
        promptUser();
    }
    else {
        getShape(sides);
    }
}

function getShape(sides) {
    sides = Math.abs(Math.round(sides));

    if (sides == 0) {
        document.getElementById("shape").innerHTML = "Not a figure!";
    }
    else if (sides == 1) {
        document.getElementById("shape").innerHTML = "You chose a Monogon";
    }
    else if (sides == 2) {
        document.getElementById("shape").innerHTML = "You chose a Bigon";
    }
    else if (sides == 3) {
        document.getElementById("shape").innerHTML = "You chose a Triangle";
    }
    else if (sides == 4) {
        document.getElementById("shape").innerHTML = "You chose a Quadrilateral";
    }
    else if (sides == 5) {
        document.getElementById("shape").innerHTML = "You chose a Pentagon";
    }
    else if (sides == 6) {
        document.getElementById("shape").innerHTML = "You chose a Hexagon";
    }
    else if (sides == 7) {
        document.getElementById("shape").innerHTML = "You chose a Heptagon";
    }
    else if (sides == 8) {
        document.getElementById("shape").innerHTML = "You chose a Octagon";
    }
    else if (sides == 9) {
        document.getElementById("shape").innerHTML = "You chose a Nonagon";
    }
    else if (sides == 10) {
        document.getElementById("shape").innerHTML = "You chose a Decagon";
    }

}

promptUser();