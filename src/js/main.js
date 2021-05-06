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