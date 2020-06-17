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
    if ($allGrades[i].value === "") {
      $allGrades[i].className = "bg-warning";
      $allGrades[i].placeholder = "This field is empty";
    }
    if ($allGrades[i].value !== "") {
      let item = Number(
        document.querySelectorAll("#form > li > input").item(i).value
      );
      myArray.push(item);
    }
  }
}

$averageButton.onclick = function () {
  createArray();
  console.log(myArray);
  if (myArray.length == 0) {
    emptyFieldsAlert();
    return false;
  }
  averageCalculation();
};

$minButton.onclick = function () {
  createArray();
  if (myArray.length == 0) {
    emptyFieldsAlert();
    return false;
  }
  minGradeCalculation();
};

$maxButton.onclick = function () {
  createArray();
  if (myArray.length == 0) {
    emptyFieldsAlert();
    return false;
  }
  maxGradeCalculation();
};

$addButton.onclick = function () {
  addInput();
};

$resetButton.onclick = function () {
  myArray = [];
  removeResults();
  removeWarnings();
};

function removeResults() {
  var averageGrade = document.getElementById("results");
  averageGrade.innerHTML = "";
}

function removeWarnings() {
  var warning = document.querySelectorAll(".bg-warning");
  for (let i = 0; i < warning.length; i++) {
    warning[i].className = "grade";
    warning[i].placeholder = "Your grade here";
  }
}

function emptyFieldsAlert() {
  alert("You must fill at least 1 field");
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
