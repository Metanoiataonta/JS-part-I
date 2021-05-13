var formArea = document.querySelectorAll('.form'),
    resultArea = document.querySelectorAll('.result'),
    primeNumberClearArray = ["topNumber"];


// used in clearInput function

function resultPlaceholder() {
    for (var result of resultArea) {
        result.innerHTML = 'Result';
    }
}

function clearInput(clearArray, index) {
    for (var clear of clearArray) {
        document.getElementById(clear).value = '';

    }
    resultArea[index].innerHTML = 'Result';
}

resultPlaceholder();
formArea[1].innerHTML = ' <p>In cart:</p><ul> <li>Apple 1 piece 20$ </li><li>Orange 2 pieces 22$ </li><li>Banana 4 pieces 19$ </li></ul>';

// Конструктор товаров
function Item(fruit, quantity, price) {
    this.fruit = fruit;
    this.quantity = quantity;
    this.price = price;
}

function countBasketPrice(cart) {
    var totalPrice = 0;
    for (var item of cart) {
        totalPrice += item.quantity * item.price;
    }
    return totalPrice;
}

var apple = new Item('Apple', 1, 20),
    orange = new Item('Orange', 2, 22),
    banana = new Item('Banana', 4, 19),
    cart = [apple, orange, banana];

console.log(cart);
resultArea[1].innerHTML = 'Total price is: ' + countBasketPrice(cart);

var numberToConvertArray = ["number-to-convert"]; // id of input tag
formArea[0].innerHTML = '<form onsubmit="convertNumber(); return false;"> <label for="number-to-convert">Type number from 0 to 999 to convert it into object</label><input type="text" id="number-to-convert"> <button type="submit">Submit</button> <button onclick="clearInput(numberToConvertArray,0)">Clear</button></form>';

function readConvertNumber() {
    return document.getElementById('number-to-convert').value;
}

function checkingConvertNumber(number) {

    if (isNaN(number)) {
        resultArea[0].innerHTML = 'You did enter not a number';
        return false;
    } else if (number < 0) {
        resultArea[0].innerHTML = ' Your number is less than 0';
        return false;
    } else if (number > 999) {
        resultArea[0].innerHTML = ' Your number is greater than 999. ' + {};
        console.log({});
        return false;
    } else if (number % 1) { // Проверяем есть ли дробная часть, если есть то сообщаем, что число не целое
        resultArea[0].innerHTML = ' Your number is not integer';
        return false;
    } else {
        return number;

    }
}

function convertNumber() {
    var number = readConvertNumber(),
        numberObj = {},
        remainder,
        length;
    number = checkingConvertNumber(number);
    length = number.toString().length;
    if (number) {
        for (var i = 0; i < length; i++) {
            remainder = number % 10;
            number = Math.floor(number / 10);
            numberObj[10 ** i] = remainder;
        }

        resultArea[0].innerHTML = 'Result is : <div> Units: ' + numberObj[1] + '</div>' +
            '<div> Tens: ' + numberObj[10] + '</div>' +
            '<div> Hundreds: ' + numberObj[100] + '</div>';
        console.log(numberObj);
    }


}