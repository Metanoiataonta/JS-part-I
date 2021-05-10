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