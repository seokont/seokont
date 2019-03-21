'use strict';

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

message = prompt('Введите пароль');

if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  alert(message);
} else if (message !== ADMIN_PASSWORD && message !== null) {
  message = 'Доступ запрещен, неверный пароль!';
  alert(message);
} else if (cancelAnimationFrame) {
  message = 'Отменено пользователем!';
  alert(message);
}
