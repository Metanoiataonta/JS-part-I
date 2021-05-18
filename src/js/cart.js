// Конструктор товаров
function Item(fruit, quantity, price) {
    this.fruit = fruit;
    this.quantity = quantity;
    this.price = price;
}


// подсчет стоимости корзины


var apple = new Item('Apple', 10, 20),
    orange = new Item('Orange', 22, 22),
    banana = new Item('Banana', 14, 19),
    product = [apple, orange, banana],
    cart = {

        items: [],
        fill: function (product) {

            for (var item of product) {
                this.items.push({
                        fruit: item.fruit,
                        amount: Math.floor(Math.random() * (item.quantity) + 1),
                        price: item.price
                    }
                )
            }
        }

    }

// Заполнение корзины
cart.fill(product);

// Вывод каталога:
function displayProduct() {
    var itemKeys = Object.keys(product[0]),
        columns = [],
        i = 0;
    formArea[1].style.display = 'grid';

    formArea[1].style.gridTemplateColumns = `repeat(${itemKeys.length}, min-content)`;

    formArea[1].style.height = 'min-content';

    for (var column of itemKeys) {
        columns.push({column: column, element: document.createElement('div')});

        columns[i].element.innerHTML = column;
        columns[i].element.style.fontSize = '25px';
        columns[i].element.style.fontWeight = '700';
        columns[i].element.style.marginRight = '20px';
        formArea[1].appendChild(columns[i].element);
        i++;
    }

    for (var fruit of product) {
        fruit.element = [];

        i = 0;
        for (var part of Object.keys(fruit)) {
            if (part !== 'element') {
                fruit.element.push(document.createElement('div'));
                fruit.element[i].innerHTML = fruit[part];
                fruit.element[i].style.paddingBottom = '10px';
                fruit.element[i].style.paddingTop = '10px';
                fruit.element[i].style.border = '1px solid #000';
                formArea[1].appendChild(fruit.element[i]);
                i++;
            }
            console.log(fruit[part])
        }

        console.log(fruit);
    }
    fruit.element.push(document.createElement('div'));
    fruit.element[i].innerHTML = 'Here is product';
    fruit.element[i].style.fontSize = '30px';
    fruit.element[i].style.gridColumn = '1 / 4'
    formArea[1].appendChild(fruit.element[i]);

}

// Вывод корзины

function displayCart() {
    var totalPrice = 0,
        totalAmount = 0;
    if (cart.items === []) {
        resultArea[1].innerHTML = 'Cart is empty';
    } else {
        for (var item of cart.items) {
            totalPrice += item.amount * item.price;
            totalAmount += item.amount;
        }
        resultArea[1].innerHTML = `In cart ${totalAmount} items for the amount of ${totalPrice} rubles`;
    }
}

displayProduct();
displayCart();