var formArea = document.querySelectorAll('.form'),
    resultArea = document.querySelectorAll('.result'),
    primeNumberClearArray = ["topNumber"];


// used in clearInput function


function clearInput(clearArray, index) {
    for (var clear of clearArray) {
        document.getElementById(clear).value = '';

    }
    resultArea[index].innerHTML = 'Result';
}