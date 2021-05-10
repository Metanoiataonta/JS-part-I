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