var formArea = document.querySelectorAll('.form'),
    resultArea = document.querySelectorAll('.result'),
    comparisonClearArray = ["first-variable", "second-variable"],
    outputAClearArray = ["a-place"];

// used in clearInput function


function clearInput(clearArray) {
    for (var clear of clearArray) {
        document.getElementById(clear).value = '';

    }
    resultArea[0].innerHTML = 'Result';
}
// form for third question
formArea[0].innerHTML = ' <div><label for="first-variable">Type first variable </label>\n' +
    ' <div><input type="text" name="first-variable" id="first-variable"> </div></div>' +
    '<div><label for="second-variable">Type second variable </label>\n' +
    '<div><input type="text" name="second-variable" id="second-variable"> </div><div><button onclick="output()"> Comfirm</button><button onclick="clearInput(comparisonClearArray)">Clear</button></div></div>';
// scripts for third question
for (var result of resultArea) {
    result.innerHTML = 'Result';
}

function readVariables() {
    var a = document.getElementById('first-variable').value,
        b = document.getElementById('second-variable').value,
        variablesArray = [a, b]
    return variablesArray;
}

function validationVariables(validationArray) {
    if (validationArray[0] >= 0 && validationArray[1] >= 0) {
        return validationArray[0] - validationArray[1];
    } else if (validationArray[0] < 0 && validationArray[1] < 0) {
        console.log(validationArray);
        return -validationArray[0] * validationArray[1];
    } else {
        return (+validationArray[0]) + (+validationArray[1]);
    }
}

function checkVariables(checkingArray) {
    var checked = true;

    for (var checkingVar of checkingArray) {
        if (!Number.isInteger(checkingVar)) {
            checked = false;
        }
    }
    if (!checked) {
        resultArea[0].innerHTML = 'Something wrong';
    }
    return checked;
}

function output() {
    var variablesArray = readVariables(),
        isChecked = checkVariables(variablesArray);
    if (isChecked) {
        resultArea[0].innerHTML = 'Result is: ' + validationVariables(variablesArray);
    }
}


// form for fourth question
formArea[1].innerHTML = '<div><label for="a-place">Type a</label></div> <div><input type="text" name="a-place" id="a-place"></div> <div><button onclick="output()">Comfirm</button> <button onclick="clearInput(outputAClearArray)">Clear</button></div>  ';


// functions for fourth question

function readA() {
    var a = document.getElementById('a-place').value;
    return a;
}

function isARight(a) {
    if (Number.isInteger(+a) && a >= 0 && a <= 15) {
        return true;
    } else {
        resultArea[1].innerHTML = 'Something wrong';
        return false;
    }
}

function output() {
    var a = readA(),
        resultOutput = '';
    if (isARight(a)) {
        switch (+a) {
            case 0:
                resultOutput = '<p>0</p>';
            case 1:
                resultOutput += '<p>1</p>';
        }
        resultArea[1].innerHTML = 'Result is: ' +
            resultOutput;
    }
}