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



const numberofFilms = prompt("Сколько фильмов уже посмотрели?", "");


const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b; 
//         console.log("Done");  
//     } else {
//         console.log("Error");
//         i--;
//     }    
// }
let i = 0;
while (i < 2) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
          if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log("Done");
            i++;  
        } else {
            console.log("Error");
            i--;
        }    
}    

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
   console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30 ) {
   console.log("Вы киноман");
} else { 
    console.log("Произошла ошибка");
}


console.log(personalMovieDB);

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log("Ok");
// }

// (num === 50) ? console.log("Ok") : console.log("Error");



// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue
//     }
//     console.log(i);
// }