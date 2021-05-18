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

// resultPlaceholder();
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
var board = {
        squares: [],
        element: {},
        pieces: {},
        init: undefined
    },
    pieces = {
        board: {},
        init: undefined,
        pawns: {
            position: function () {
                var place = [];
                for (var i = 1; i < 9; i++) {
                    place.push(i);
                }
                return place;
            },
            id: 'chess-pawn'
        },
        bishops: {
            position: [3, 6],
            id: 'chess-bishop'
        },
        rooks: {
            position: [1, 8],
            id: 'chess-rook'
        },
        knights: {
            position: [2, 7],
            id: 'chess-knight'
        },
        king: {
            position: [5],
            id: 'chess-king'
        },
        queen: {
            position: [4],
            id: 'chess-queen'
        }
    };

board.init = function (pieces) {
    var counter = 1;  // отвечает за цвет квадрата

    this.pieces = pieces;
    this.element = formArea[0];
    this.element.style = 'display: grid; grid-template-columns: repeat(9, min-content); ';

    // Пустой элемент, чтобы не съезжали строки
    this.squares.push([]);
    this.squares[0].push({});
    this.squares[0][0].element = document.createElement('div');
    this.element.appendChild(this.squares[0][0].element);

    // Заполняем названия столбцов

    for (var i = 1; i < 9; i++) {
        this.squares[0].push({});
        this.squares[0][i].element = document.createElement('div');
        this.squares[0][i].element.classList.add('designation', 'square');
        this.squares[0][i].element.innerText = String.fromCharCode(96 + i);
        this.element.appendChild(this.squares[0][i].element);
    }


    // Заполнение поля и отрисовка поля
    for (i = 8; i > 0; --i) {
        this.squares[i] = [];
        for (var j = 0; j < 9; j++) {
            this.squares[i].push({});
            this.squares[i][j].element = document.createElement('div');
            if (j === 0) {
                this.squares[i][j].element.classList.add('designation', 'square');
                this.squares[i][j].element.innerText = i;
            } else if (counter % 2 === 0) {
                this.squares[i][j].element.classList.add('dark', 'square');
            } else {
                this.squares[i][j].element.classList.add('light', 'square');
            }
            counter++;
            this.element.appendChild(this.squares[i][j].element);
        }

    }
}
// king
// board.squares[this.king.position[0]][this.king.position[1]].element.innerHTML = '<svg class="piece white"><use href="#chess-king"></use></svg>';
// Функция для расположения фигур в зависимости от цвета
placePieces = function (color) {
    var positionY;
    if (color === 'white') {
        positionY = 1;
    } else {
        positionY = 8;
    }
    for (var pieceKey of Object.keys(pieces)) {
        if (pieceKey === 'pawns') {
            var piece = pieces[pieceKey],
                pawnsPosition = piece.position(),
                pawnsPositionY;
            if (color === 'white') {
                pawnsPositionY = 2;
            } else {
                pawnsPositionY = 7;
            }
            // console.log(piece, pawnsPosition);
            for (var positionX of pawnsPosition) {
                board.squares[pawnsPositionY][positionX].element.innerHTML = `<svg class="piece ${color}"><use href="#${piece.id}"></svg>`;
            }
        } else if (pieceKey !== 'board' && pieceKey !== 'init') {
            piece = pieces[pieceKey];
            // console.log(piece);
            for (positionX of piece.position) {
                board.squares[positionY][positionX].element.innerHTML = `<svg class="piece ${color}"><use href="#${piece.id}"></svg>`;
            }

        }
    }
}
// расположение фигур на доске

pieces.init = function (board) {
    this.board = board;
    placePieces('white');
    placePieces('black');

}
board.init(pieces);
pieces.init(board);