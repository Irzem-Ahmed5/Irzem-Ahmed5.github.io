var persons = ["Irzem", "Manzoor", "Zakir"];
var salaries = [65, 101, 100];




function addSalary() {
    var nameInput = document.getElementById('persons').value;
    var salaryInput = document.getElementById('salary').value;


    if (salaryInput < 0 || salaryInput > 300 || salaryInput == "") {
        alert("Incorrect salary input. Please enter a value within 0-300");
        salaryInput = 0;
    } else {
        salaryInput = parseInt(salaryInput);
        if (persons.includes(nameInput))
            salaries[persons.indexOf(nameInput)] = salaryInput;
        alert("Salary added!")
    }



    //tester
    console.log("Person: " + nameInput + " Sal: " + salaries[persons.indexOf(nameInput)])
    console.log("salInput" + salaryInput)
}

function displayResults() {
    let sum = 0;
    let average = 0;
    let highestIndex = 0;
    let highestSalary = 0;

    for (i = 0; i < salaries.length - 1; i++) {
        sum += salaries[i];
    }

    average = (sum / 3);

    for (i = 0; i < salaries.length - 1; i++) {
        if (salaries[i] > highestSalary) {
            highestIndex = i;
            highestSalary = salaries[i];
        }
    }

    document.getElementById('average-result').innerHTML = "Average salary is " + average + "k " +
        "and highest salary is for " + "Person: " + persons[highestIndex] + " Salary: " + salaries[highestIndex];

    //tester
    //console.log(average);

}

function displaySalary() {
    let html = "";

    html += "<tr><th>Name</th> <th>Salary (in thousands of dollars)</th></tr>";

    for (i = 0; i < salaries.length; i++) {
        html += "<tr><td>" + persons[i] + "</td><td>" + salaries[i] + "</td></tr>";

    }
    html += "</table>";

    document.getElementById('table').innerHTML = "<h2>Salaries</h2>" + html;


}




