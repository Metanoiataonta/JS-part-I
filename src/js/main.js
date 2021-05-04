var formArea = document.querySelectorAll('.form'),
    resultArea = document.querySelectorAll('.result');

formArea[0].innerHTML = '<label for="value">Type Degrees Celsius to convert into Fahrenheit </label>\n' +
    '<input type="number" name="value" id="value"> <button onclick="convertValue()"> Comfirm</button><button onclick="clearInput(\'value\', 0)">Clear</button>';
for (var result of resultArea) {
    result.innerHTML = 'Result';
}
formArea[1].innerHTML = ' <laber for="name">Type name</laber>' +
    '<input type="text" name="name" id="name" placeholder="Василий"><button onclick="outputAdmin()"> Confirm</button><button onclick="clearInput(\'name\', 1)">Clear</button>'

function convertValue() {
    var value = document.getElementById('value').value,
        valueToNumber = Number(value),
        fahrenheit = valueToNumber * (9 / 5) + 32;
    resultArea[0].innerHTML = fahrenheit;
}

function outputAdmin() {
    var name = document.getElementById('name'),
        admin;

    if (name.value === '') {

        admin = name.placeholder;

    } else {
        admin = name.value;
    }
    resultArea[1].innerHTML = 'Admin name is ' + admin;
}

function clearInput(id, index) {
    item = document.getElementById(id);
    item.value = '';
    resultArea[index].innerHTML = 'Result';
}

function string() {
    var str = 1000 + '108';
    document.querySelector('.string').innerHTML = '<div>1000 + \"108\" = string \"1000108\"</div>' + '<div> Proof: value: ' + str + ' with type: ' + typeof str + '</div>';
}

string();