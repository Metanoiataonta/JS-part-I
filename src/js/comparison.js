// form for third question
formArea[0].innerHTML = ' <label for="first-variable">Type first variable </label>\n' +
    ' <input type="text" name="first-variable" id="first-variable"> ' +
    '<label for="second-variable">Type second variable </label>\n' +
    '<input type="text" name="second-variable" id="second-variable"> <button onclick="output()"> Comfirm</button><button onclick="clearInput(comparisonClearArray)">Clear</button>';
// scripts for third question
for (var result of resultArea) {
    result.innerHTML = 'Result';
}

function readVariables() {
    var a = document.getElementById('first-variable').value,
        b = document.getElementById('second-variable').value,
        variablesArray = [a, b];
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

    var checked;
    for (var checkingVar of checkingArray) {
        if (Number.isInteger(+checkingVar)) {
            checked = true;
        } else {
            resultArea[0].innerHTML = 'Something wrong';
            return false;
        }

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

