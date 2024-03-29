'use strict';

// На счету пользователя есть 23580 кредитов, хранится в переменной credits (создай и присвой).

// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.

//     переменная pricePerDroid (создай и присвой) хранит цену одного дроида
//     переменная quantity (создай и присвой) хранит количество дроидов которые пользователь хочет купить, пусть будет 3.

// Напиши скрипт который:

//     Рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
//     Проверяет сможет ли пользователь оплатить заказ:
//         если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
//         в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'
//     Проверь работоспособность скрипта со значениями переменной quantity: 3, 5, 8 и 12.

let credits = 23580;
let pricePerDroid = 3000;
let quantity = 3;
let totalPrice = pricePerDroid * quantity;
let result = credits - totalPrice;

if (credits < totalPrice) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${quantity} дроидов, на счету осталось ${result} кредитов.`,
  );
}
