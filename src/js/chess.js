var board = {
    squares: [],
    element: {}
};
// pieces = {
//     pawns: {
//         position: function () {
//             var place = [];
//             for (var i = 1; i < 8; i++) {
//                 place.push([6, i]);
//             }
//             return place;
//         },
//
//     }
// };

board.init = function (pieces) {
    var counter = 1;  // отвечает за цвет квадрата


    this.element = formArea[0];
    this.element.style = 'display: grid; grid-template-columns: repeat(9, min-content);';

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


    // Заполнение поля
    for (i = 1; i < 8; i++) {
        this.squares.push([]);
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

board.init(0);