/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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

const promo = document.querySelectorAll('.promo__adv img'),
    promoItem = document.querySelector('.promo__interactive-list'),
    addInput = document.querySelector('.adding__input'),
    addBtn = addInput.parentElement.lastElementChild;

promo.forEach(item => {
    item.remove();
});

// for (let i = promo.length; i > 0; i--) {
//     promo[i-1].remove();
// }

// const promoItem = document.querySelectorAll('.promo__interactive-item');

// for (let i = 0; i < promoItem.length; i++) {
//     promoItem[i].innerHTML = `${i+1} ` + movieDB.movies.sort()[i] + `<div class="delete"></div>`;
// }
document.querySelector('.promo__genre').textContent = "драма";

document.querySelector('.promo__bg').style.backgroundImage = "url('../img/bg.jpg')";

promoItem.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    promoItem.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

function pushMovies (i) {    
    // i = movieDB.movies.length;
    // promoItem.innerHTML += `
    // <li class="promo__interactive-item">${i} ${movieDB.movies[i-1]}
    //     <div class="delete"></div>
    // </li>
    // `;
    movieDB.movies.forEach((film, i) => {
        promoItem.innerHTML = "";
        movieDB.movies.sort();
        promoItem.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });    
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    movieDB.movies.push(addInput.value);
    pushMovies();
    addInput.value = '';
});