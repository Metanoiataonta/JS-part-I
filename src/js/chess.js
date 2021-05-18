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
            console.log(piece, pawnsPosition);
            for (var positionX of pawnsPosition) {
                board.squares[pawnsPositionY][positionX].element.innerHTML = `<svg class="piece ${color}"><use href="#${piece.id}"></svg>`;
            }
        } else if (pieceKey !== 'board' && pieceKey !== 'init') {
            piece = pieces[pieceKey];
            console.log(piece);
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