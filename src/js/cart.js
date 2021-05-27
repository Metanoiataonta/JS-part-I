// Конструктор товаров
function Item(fruit, quantity, price) {
    this.fruit = fruit;
    this.quantity = quantity;
    this.price = price;
}


// подсчет стоимости корзины


var apple = new Item('Apple', 10, '20 &pound'
    ),
    orange = new Item('Orange', 22, '22 &pound'),
    banana = new Item('Banana', 14, '19 &pound'),
    product = {items: [apple, orange, banana]};
cart = [];

// Вывод каталога:
function displayProduct() {
    var itemKeys = Object.keys(product.items[0]),
        columns = [],
        i = 0;
    formArea[1].style.display = 'grid';

    formArea[1].style.gridTemplateColumns = `repeat(${itemKeys.length + 2}, 1fr)`;


    for (var column of itemKeys) {
        columns.push({column: column, element: document.createElement('div')});

        columns[i].element.innerHTML = column;
        columns[i].element.classList.add('column');
        columns[i].element.style.fontSize = '25px';
        columns[i].element.style.fontWeight = '700';
        columns[i].element.style.marginRight = '20px';
        formArea[1].appendChild(columns[i].element);
        i++;
    }
    document.querySelectorAll('.column:last-of-type')[0].style.gridColumn = `${itemKeys.length} / ${itemKeys.length + 3}`;

    for (var fruit of product.items) {
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

        }

        fruit.element.push(document.createElement('input'));
        fruit.element[i].setAttribute('type', 'number');
        fruit.element[i].style.height = '100%';
        fruit.element[i].setAttribute('placeholder', 'set amount of fruit');
        formArea[1].appendChild(fruit.element[i]);
        i++;
        fruit.element.push(document.createElement('button'));
        fruit.element[i].addEventListener('click', product.buttonHandler.bind(fruit));
        fruit.element[i].innerHTML = 'Buy';

        formArea[1].appendChild(fruit.element[i]);

    }


}

function valueCheck(value, cartItem) {

    if (Number.isInteger(+value) && value > 0 && value <= cartItem.quantity) {
        console.log(value, cartItem.quantity);
        return true;
    } else return false;
}

product.buttonHandler = function () {
    var value = this.element[this.element.length - 2].value,
        inCart = [false, 0];


    cart.forEach((item) => {
        if (item.fruit === this.fruit) return inCart = {itIs: true, index: cart.indexOf(item)}
    })

    if (inCart.itIs) {
        cartItem = cart[inCart.index];
        var newAmount = cartItem.amount + Number(value);

        if (valueCheck(newAmount, cartItem)) {

            cartItem.amount = newAmount;
            cartItem.itemsPrice = cartItem.amount * parseInt(cartItem.price) + '&pound';
        } else {
            console.log('No so much items in store');
            this.element[4].classList.add('wrong-value');
            setTimeout(() => this.element[4].classList.remove('wrong-value'), 1000);
        }

        displayCart();
    } else {
        var cartItem = {};
        cart.push(Object.assign(cartItem, this));

        if (valueCheck(value, cartItem)) {
            cartItem.amount = +value;
            cartItem.itemsPrice = cartItem.amount * parseInt(cartItem.price) + '&pound';
            cartItem.element = {};


            displayCart();
        } else {
            console.log('wrong value', this);
            this.element[4].classList.add('wrong-value');
            setTimeout(() => this.element[4].classList.remove('wrong-value'), 1000);
            cart.pop();
        }
    }

}

// Вывод корзины

function displayCart() {
    if (cart.length === 0) {
        resultArea[1].innerHTML = "Cart is empty";
    } else {
        resultArea[1].innerHTML = '';
        var itemKeys = Object.keys(cart[0]),
            columns = [],
            i = 0;
        resultArea[1].style.display = 'grid';

        resultArea[1].style.gridTemplateColumns = `repeat(${itemKeys.length - 2}, 1fr)`;


        for (var column of itemKeys) {
            if (column !== 'quantity' && column !== 'element') {
                columns.push({column: column, element: document.createElement('div')});

                columns[i].element.innerHTML = column;
                columns[i].element.classList.add('column');
                columns[i].element.style.fontSize = '25px';
                columns[i].element.style.fontWeight = '700';
                columns[i].element.style.marginRight = '20px';
                resultArea[1].appendChild(columns[i].element);
                i++;
            }
        }

        for (var fruit of cart) {

            fruit.element = [];

            i = 0;
            for (var part of Object.keys(fruit)) {
                if (part !== 'quantity' && part !== 'element') {
                    fruit.element.push(document.createElement('div'));
                    fruit.element[i].innerHTML = fruit[part];
                    fruit.element[i].style.paddingBottom = '10px';
                    fruit.element[i].style.paddingTop = '10px';
                    fruit.element[i].style.border = '1px solid #000';
                    resultArea[1].appendChild(fruit.element[i]);
                    i++;
                }

            }
        }
        var totalPrice = 0,
            totalAmount = 0;
        cart.forEach((item) => {
            totalPrice += parseInt(item.itemsPrice);
            totalAmount += item.amount;
        })
        resultArea[1].innerHTML += `<div> In cart ${totalAmount} items for the amount of ${totalPrice} &pound </div>`;
        resultArea[1].children[resultArea[1].children.length - 1].style.gridColumn = `1 / ${itemKeys.length - 1}`;
    }

}

displayProduct();
displayCart();