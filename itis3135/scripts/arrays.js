var persons = ["Irzem", "Manzoor", "Zakir"];
var salaries = [65, 100, 100];

function addSalary() {

    let nameInput = document.getElementById('persons').value;
    let salaryInput = document.getElementById('salary').value;

    if (salaryInput < 0 || salaryInput > 300 || salaryInput == "") {
        alert("Incorrect salary input. Please enter a value within 0-300");
        salaryInput = 0;
    } else {
        salaryInput = parseInt(salaryInput);
        if (persons.includes(nameInput))
            salary[persons.indexOf(nameInput)] = salaryInput;
    }

    alert("Salary added!")

    //tester
    console.log("Person: " + nameInput + " Sal: " + salary[persons.indexOf(nameInput)])

}

function displayResults() {
    let sum = 0;
    let average = 0;

    for (i = 0; i < salaries.length - 1; i++) {
        sum += salaries[i];
    }

    average = (sum / 3);

    document.getElementById('average-result').innerHTML = "Average salary is " + average + "k";

    //tester
    console.log(average);

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




