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
formArea[0].innerHTML = '<label for ="topNumber"> Type top number to find prime numbers</label> <input type="text" id="topNumber"><button onclick="primeNumbers()">Comfirm</button> <button onclick="clearInput(primeNumberClearArray,0)">Clear</button> ';

// Для проверки на простые числа нет смысла рассматривать четные числа, т.к. все они делятся на 2. Так же как делитель нет смысла рассматривать числа большие квадратного корня делимого, т.к. если один делитель и будет больше квадратного корня, то второй - нет.

function primeNumbers() {

    var i = 1,
        top = document.getElementById('topNumber').value;
    if (!isNaN(top)) {
        resultArea[0].innerHTML = 'Result is: ';
        notPrime:   while (i <= top) {
            var j = 3;
            if ((i !== 2) && (i % 2 === 0)) {
                i++;
                continue;
            }
            while (j < Math.floor(Math.sqrt(i))) {

                if (i % j === 0) {
                    i++;
                    continue notPrime;
                }
                j += 2;
            }
            resultArea[0].innerHTML += i + ', ';
            i++;
        }
    }
}
// formArea[1].innerHTML = ' <p>In cart:</p><ul> <li>Apple 1 piece 20$ </li><li>Orange 2 pieces 22$ </li><li>Banana 4 pieces 19$ </li></ul>';

// Конструктор товаров
function Item(fruit, quantity, price) {
    this.fruit = fruit;
    this.quantity = quantity;
    this.price = price;
}

function countBasketPrice(cart) {
    var totalPrice = 0;
    for (var item of cart) {
        totalPrice += item.quantity * item.price
    }
    return totalPrice;
}

var apple = new Item('Apple', 1, 20),
    orange = new Item('Orange', 2, 22),
    banana = new Item('Banana', 4, 19),
    cart = [apple, orange, banana];

console.log(cart);
resultArea[1].innerHTML = 'Total price is: ' + countBasketPrice(cart);

formArea[3].innerHTML = 'Pyramid, same in console';
var string = '';
for (var i = 0; i < 20; i++) {
    string += 'x';
    resultArea[3].innerHTML += string + '<br>';
    console.log(string);
}
formArea[2].innerHTML = 'Output numbers from 0 to 9 ';
for (var i = 0; i < 10; (resultArea[2].innerHTML += i++ + ', ')) {
}