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