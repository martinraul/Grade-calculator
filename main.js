"use strict";
let myArray = [];

const $averageButton = document.querySelector("#average-button");
const $addButton = document.querySelector("#add-button");
const $minButton = document.querySelector("#min-button");
const $maxButton = document.querySelector("#max-button");
const $resetButton = document.querySelector("#reset-button");

function addInput() {
	const newInput = document.createElement("input");
	const node = document.createElement("li");

	newInput.type = "number";
	newInput.className = "grade";
	newInput.placeholder = "Your grade here";

	node.appendChild(newInput);
	document.querySelector("#form").appendChild(node);
}

function createArray() {
	const $allGrades = document.querySelectorAll("#form > li > input");
	for (let i = 0; i < $allGrades.length; i++) {
		if ($allGrades[i].value !== "") {
			let item = Number(document.querySelectorAll("#form > li > input").item(i).value);
			myArray.push(item);
		};
	};
};

$averageButton.onclick = function () {
	createArray();
	averageCalculation();
	console.log(myArray);
}

$minButton.onclick = function () {
	createArray();
	minGradeCalculation();
}

$maxButton.onclick = function () {
	createArray();
	maxGradeCalculation();

}

$addButton.onclick = function () {
	addInput();
}

$resetButton.onclick = function () {
	myArray = [];
	removeResults()
}

function removeResults(){
	var averageGrade = document.getElementById("results");
		averageGrade.style.display = "none";
}
/*
function removeResults(){

	function removeAverage() {
		var averageGrade = document.getElementById("average-grade");
		averageGrade.parentNode.removeChild(averageGrade);
	}

	function removeMax(){
		var maxGrade = document.getElementById("max-grade");
		maxGrade.parentNode.removeChild(maxGrade);
	}

	function removeMin() {
		var minGrade = document.getElementById("min-grade");
			minGrade.parentNode.removeChild(minGrade);
	}
	removeAverage()
	removeMax()
	removeMin()
	}
	*/