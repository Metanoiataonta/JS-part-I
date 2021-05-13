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
