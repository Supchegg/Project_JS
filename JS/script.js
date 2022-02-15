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

// // document.write(answers);




const personalMovieDB = {
    count: 0,  //От сюда идут свойства, которые описывают
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() { // От сюда идут методы, модефицируют бд
        personalMovieDB.count = prompt("Сколько фильмов уже посмотрели?", "");
    
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(numberofFilms)){
            personalMovieDB.count = prompt("Сколько фильмов уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    
    },
    detectPersonalLvl: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
           console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30 ) {
           console.log("Вы киноман");
        } else { 
            console.log("Произошла ошибка");
        }
    },
    showMyDb: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false; // Если privat- true, выполняется эта команда
        } else {
            personalMovieDB.privat = true; // Если privat- false
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`,"").toLowerCase(); // Специально получаем нижний регистр, чтобы правильно отсортировать.

            if (genre == null || genre == "") {
            } else {
                personalMovieDB.genres[i-1] = genre;
                personalMovieDB.genres.sort(); // 

            }
        }
        personalMovieDB.geners.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

};


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

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log(`Я прошел этот урок`);
// }
// learnJS("JavaScript", done); // Callback функции

// // const obj = new Object();
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };
// options.makeTest();
// // console.log(options["colors"]["border"]);

// // console.log(Object.keys(options).length);

// const{border, bg} = options.colors; // Диструктаризация
// console.log(border);
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

// // Массивы

const arr = [1, 2, 3, 4, 5, 6];
arr.sort(compareNum); //Алкгоритм быстрой сортировки
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// // arr.pop();
// // arr.push(10);
// // console.log(arr);

// // for (let i=0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // for (let value of arr) { // Здесь уместно break и сщтегтшу
// //     console.log(value);
// // }

arr.forEach(function(kek, i, arr) { // Значение, номер позиции, массив
    console.log(`${i}: ${kek} внутри массива ${arr}`); // Перебор массива с Callback функцией
});

// const str = prompt("", "");
// const products = str.split(", "); //Превращает строку в массив
// console.log(products);
// // products.sort(); // Сортирует по алфавиту
// console.log(products.join("; ")); // Превращает массив в строку с разделением ;

/* Передача по ссылке или по значению, Spread оператор (ES6-ES9)
                                                            Копирование 1 способ через циклы */
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy [key] = mainObj [key] ;
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = (Object.assign({}, add));

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "asdsfgfdg";

console.log(newArray);
console.log(oldArray);


// Spread operator
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', "livejournal", "blogger"],
      internet = [...video,...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];
console.log(newAarray);

const d = {
    one: 1,
    two: 2
};
console.log(d);

const newObj = {...d};

console.log(newObj);

// ООП

let str = "some";
let strObj = new String(str);

console.log(typeof(str));

console.log(typeof(strObj));

console.dir([1, 2, 3]); // Позволяет смотреть свойства объекта в консоли браузера

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

const john = Object.create(soldier); // Создание объекта John со связью с Soldier

// const john = {
//     health: 100
// };

Object.setPrototypeOf(john, soldier); // устанавливаем протатип джону от солдата в динамике


// john.__proto__ = soldier; // Устанавливает связь soldier && John, устаревший формат

console.log(john.armor);
john.sayHello();

// Practise 

Object.setPrototypeOf(log(),personalMovieDB);
Object.setPrototypeOf(copy(),personalMovieDB);
Object.setPrototypeOf(compareNum(),personalMovieDB);
Object.setPrototypeOf(showMyDb(),personalMovieDB);
Object.setPrototypeOf(writeYourGenres(),personalMovieDB);
Object.setPrototypeOf(detectPersonalLvl(),personalMovieDB);
Object.setPrototypeOf(rememberMyFilms(),personalMovieDB);

function toggleVisibleMyDB() {
    if (personalMovieDB.privat){
        personalMovieDB.privat = false; // Если privat- true, выполняется эта команда
    } else {
        personalMovieDB.privat = true; // Если privat- false
    }
}


