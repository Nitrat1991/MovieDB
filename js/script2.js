/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelectorAll('.promo__adv img');

promo.forEach(item => {
    item.remove();
});

// for (let i = promo.length; i > 0; i--) {
//     promo[i-1].remove();
// }

document.querySelector('.promo__genre').textContent = "драма";

document.querySelector('.promo__bg').style.backgroundImage = "url('../img/bg.jpg')";

const promoItem = document.querySelector('.promo__interactive-list');

// const promoItem = document.querySelectorAll('.promo__interactive-item');

// for (let i = 0; i < promoItem.length; i++) {
//     promoItem[i].innerHTML = `${i+1} ` + movieDB.movies.sort()[i] + `<div class="delete"></div>`;
// }
promoItem.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    promoItem.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});