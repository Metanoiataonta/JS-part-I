Первое:

var a = 1, b = 1, c, d; c = ++a; alert(c); // 2 ++a это прединкремент, сначала увеличивает значение переменной, потом
выводит. d = b++; alert(d); // 1 b++ это постинкремент, сначала выводит значение переменной, а потом увеличивает на 1. c
= (2+ ++a); alert(c); // 5 ++a это прединкремент, сначала увеличивает, а потом выводит 3, 3 + 2 = 5 d = (2+ b++); alert(
d); // 4 b++ Постинкремент выводится 2, 2 + 2 = 4 alert(a); // 3 Два действия инкрементации здесь и ниже увеличили
значение переменной на 2, 1 + 2 = 3 alert(b); // 3

========================================

Второе:

var a = 2; var x = 1 + (a *= 2);

x = 5, т.к. a*= 2 то же самое, что a = a * 2, т.е. 2 * 2 = 4, плюс 1 равно 5

Третье:

Сделано, вопросов нет

Четвертое: 

Задумался о том, что диапазон и вправду можно увеличивать бесконечно (от 0 до 150, от 0 до 150 тысяч), и конструкцию switch положил в цикл for. Пока не придумал как сделать не используя цикл for и не упиваться копипастом.
// работа в процессе