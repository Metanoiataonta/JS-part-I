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
formArea[4].innerHTML = '<label for="power">Type variable and degree</label><input type="text" id="val"><input type="text" id="pow"><button onclick="powerGeneral()">Comfirm</button> <button onclick="clearInput(outputAClearArray,4)">Clear</button>'

// calculation

function power(val, pow) {
    if (pow == 0) {

        return 1;
    } else if (pow == 1) {
        return val;
    } else if (pow > 0) {
        if (Number.isInteger(pow)) {
            console.log('val is: ' + val + ' pow is: ' + (pow - 1));
            return power(val, pow - 1) * val;
        }
    } else {
        console.log('val is: ' + val + ' pow is: ' + -(Math.abs(pow) - 1));
        return power(val, -(Math.abs(pow) - 1)) / val;
    }
}

function readPower() {
    var val = document.getElementById('val').value,
        pow = document.getElementById('pow').value;
    return [val, pow];
}

function checkPower(powerArray) {
    var checkedPower;
    for (var checkingPower of powerArray) {
        if (!isNaN(checkingPower)) {
            checkedPower = true;
        } else {
            resultArea[4].innerHTML = 'variable or degree is not a number';
            return false;
        }
    }
    console.log(powerArray);
    console.log(Number.isInteger(+powerArray[1]))
    if (!Number.isInteger(+powerArray[1])) {
        resultArea[4].innerHTML = 'pow is fractional number';
        return false;
    }
    return checkedPower;

}

// General function

function powerGeneral() {
    var powerArray = readPower();
    if (checkPower(powerArray)) {
        resultArea[4].innerHTML = 'Result is: ' + power(+powerArray[0], +powerArray[1]);
    }
}
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


formArea[2].innerHTML = '<label for="maths-1">Type two variables and operations</label><input type="text" id="maths-1"><input type="text" id="maths-2"><input type="text" id="operator" placeholder="+ - * /"> <button onclick="mathCalc()">Comfirm</button> <button onclick="clearInput(mathsClearArray,2)">Clear</button>'

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
function nullZero() {
    var nullComparison = document.createElement('div');
    nullComparison.innerHTML = ' <div> (null == 0) ' + (null == 0);
    nullComparison.innerHTML += '</div> <div> (null === 0) ' + (null === 0);
    nullComparison.innerHTML += '</div> <div>  (null != 0) ' + (null != 0);
    nullComparison.innerHTML += '</div> <div>  (null !== 0) ' + (null !== 0);
    nullComparison.innerHTML += '</div> <div>  (null > 0) ' + (null > 0);
    nullComparison.innerHTML += '</div> <div>  (null < 0) ' + (null < 0);
    return nullComparison.innerHTML;


}

formArea[3].innerHTML = nullZero();
// form for fourth question
formArea[1].innerHTML = '<label for="a-place">Type a</label> <input type="text" name="a-place" id="a-place"> <button onclick="outputA()">Comfirm</button> <button onclick="clearInput(outputAClearArray,1)">Clear</button>  ';


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
    var a = readA();
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