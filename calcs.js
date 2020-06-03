function averageCalculation() {
	let totalGrades = 0;
	let averageGrade = 0;
	for (let i = 0; i < myArray.length; i++) {
		totalGrades = totalGrades + myArray[i];
		averageGrade = totalGrades / myArray.length;
	}
	showAverageGrade(averageGrade);
}

function minGradeCalculation() {
	var minGrade = Math.min.apply(Math, myArray);
	showMinGrade(minGrade);
}

function maxGradeCalculation() {
	var maxGrade = Math.max.apply(Math, myArray);
	showMaxGrade(maxGrade);
}

function showAverageGrade(averageGrade) {
	var newDiv = document.createElement("div");
	var newContent = document.createTextNode("Average grade is " + averageGrade);
	newDiv.appendChild(newContent);

	var currentDiv = document.getElementById("results");
	currentDiv.appendChild(newDiv);
}

function showMaxGrade(maxGrade) {
	var newDiv = document.createElement("div");
	var newContent = document.createTextNode("Highest grade is " + maxGrade);
	newDiv.appendChild(newContent);

	var currentDiv = document.getElementById("results");
	currentDiv.appendChild(newDiv);
}

function showMinGrade(minGrade) {
	var newDiv = document.createElement("div");
	var newContent = document.createTextNode("Lowest grade is " + minGrade);
	newDiv.appendChild(newContent);


	var currentDiv = document.getElementById("results");
	currentDiv.appendChild(newDiv);
}