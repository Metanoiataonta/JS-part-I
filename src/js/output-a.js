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