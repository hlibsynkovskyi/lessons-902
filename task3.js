"use strict";

/*
Напишите код, который будет спрашивать логин (prompt).
Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён»,
если вводит что-то другое – «Я вас не знаю».

Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!»,
иначе – «Пароль неверен», при отмене – «Вход отменён».
 */

let login = prompt('Введите логин');
let password;

if (login === null) {
	alert('Вход отменен');
} else if (login !== 'Админ') {
	alert('Я вас не знаю');
} else { // Ввели Админ
	password = prompt('Введите пароль');

	if (password === 'Чёрный Властелин') {
		alert('Добро пожаловать!');
	} else if (password !== null) {
		alert('Пароль неверен');
	} else {
		alert('Вход отменён');
	}
}
