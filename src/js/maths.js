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