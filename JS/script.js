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



let numberofFilms; 

function start() {
    numberofFilms = prompt("Сколько фильмов уже посмотрели?", "");

    while(numberofFilms == "" || numberofFilms == null || isNaN(numberofFilms)){
        numberofFilms = prompt("Сколько фильмов уже посмотрели?", "");

    }
}

start();


const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log("Done");  
        } else {
            console.log("Error");
            i--;
        }    
    }

}

rememberMyFilms();
// let i = 0;
// while (i < 2) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");
//           if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b; 
//             console.log("Done");
//             i++;  
//         } else {
//             console.log("Error");
//             i--;
//         }    
// }    
function detectPersonalLvl() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
       console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30 ) {
       console.log("Вы киноман");
    } else { 
        console.log("Произошла ошибка");
    }
}

detectPersonalLvl();

console.log(personalMovieDB);

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}
showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.geners[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,"");
    }
}
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
// let num = 20;

// function GetMessage(text) {
//     console.log(text);
//     num = 10;
// }

// GetMessage("ssd");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hi");
// };
// logger();

// const calc = (a, b) => { return a + b };

// const str = "test";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";
// console.log(logg.slice(6, 11));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log(`Я прошел этот урок`);
}
learnJS("JavaScript", done); // Callback функции

// const obj = new Object();
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("Test");
    }
};
options.makeTest();
// console.log(options["colors"]["border"]);

// console.log(Object.keys(options).length);

const{border, bg} = options.colors; // Диструктаризация
console.log(border);
// console.log(options.name);

// delete options.name;
// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for ( let i in options[key] ) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//             counter++;   
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);  
//         counter++;
//     }
// }
// console.log(counter);
