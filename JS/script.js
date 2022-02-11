"use strict"; // Дерективна сворешенного и современного синтаксиса :D

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18", "18");
// console.log(answer);

// const answers = [];

// answers [0] = prompt("Какое ваше имя?", "");
// answers [1] = prompt("Какая ваша фамилия?", "");
// answers [2] = prompt("Сколько вам лет?", "");

// document.write(answers);



const numberofFilms = +prompt("Сколько фильмов уже посмотрели?", "");


const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("На сколько оцените его?",""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);