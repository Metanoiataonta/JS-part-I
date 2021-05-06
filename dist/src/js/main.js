var formArea = document.querySelectorAll('.form'),
    resultArea = document.querySelectorAll('.result'),
    comparisonClearArray = ["first-variable", "second-variable"],
    outputAClearArray = ["a-place"],
mathsClearArray = ["maths-1", "maths-2", "operator"];

// used in clearInput function


function clearInput(clearArray, index) {
    for (var clear of clearArray) {
        document.getElementById(clear).value = '';

    }
    resultArea[index].innerHTML = 'Result';
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


formArea[2].innerHTML = '<div><label for="maths-1">Type two variables and operations</label></div><div><input type="text" id="maths-1"><input type="text" id="maths-2"></div><div><input type="text" id="operator" placeholder="+ - * /"></div> <div><button onclick="mathCalc()">Comfirm</button> <button onclick="clearInput(mathsClearArray,2)">Clear</button></div>'

function mathsRead() {
    var a = document.getElementById('maths-1').value,
        b = document.getElementById('maths-2').value,
        oper = document.getElementById('operator').value,
        mathsArray = [a, b, oper];
    return mathsArray;
}

function mathsCheck(mathsArray) {
    var operatorCheck = mathsArray[2];
    if (!(operatorCheck == '+' || operatorCheck == '-' || operatorCheck == '*' || operatorCheck == '/')) {
        resultArea[2].innerHTML = 'Wrong operator';
        return false;
    }

    if (isNaN(mathsArray[0]) || isNaN(mathsArray[1])) {
        resultArea[2].innerHTML = 'Wrong variables';
        return false;
    } else {
        return true;
    }
}

// Math functions

function addition(a, b) {
    return (+a) + (+b);
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return addition(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return division(arg1, arg2);
    }
}

function mathCalc() {
    var calcArray = mathsRead();
    if (mathsCheck(calcArray)) {
        resultArea[2].innerHTML = 'Result is: ' + mathOperation(calcArray[0], calcArray[1], calcArray[2])
    }
}
// form for fourth question
formArea[1].innerHTML = '<div><label for="a-place">Type a</label></div> <div><input type="text" name="a-place" id="a-place"></div> <div><button onclick="outputA()">Comfirm</button> <button onclick="clearInput(outputAClearArray,1)">Clear</button></div>  ';


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

function outputA() {
    var a = readA(),
        resultOutput = '';
    if (isARight(a)) {
        resultArea[1].innerHTML = 'Result is: ';
        for (a; a < 16; a++) {
            switch (a) {
                case a:
                    resultArea[1].append(a + ' ');

            }
        }

    }
}