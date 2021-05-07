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