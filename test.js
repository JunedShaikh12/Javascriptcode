"use Strict";
// const name = "Juned";
// console.log(name);
// let name2 = 'ghghg';
// console.log(name2);

// console.log(typeof undefined);
// let score = "";
// console.log(typeof score);
// let valueInNumbers = Number(score);
// console.log(typeof valueInNumbers);

// console.log('3' + 3  + 3 )
// console.log(-3 + 3)
// console.log(+false)

// console.log("02" < 1);
// console.log(1 > 2);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log("---------------");

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

console.log("2" == 2);
console.log("2" === 2);

console.log("_-----------------");
let Num = 5;
Num = "Juned";
console.log(Num);
console.log("---------------");

function  myFunction(){
    console.log("HELLO");
}
myFunction();
console.log(typeof myFunction);
console.log("------------xxxxxx---------");

let myName = "Juned";
let myName2 = myName;
myName2 = "Ali";
console.log(myName);
console.log(myName2);

const name = "Juned";
const repoCount = 50;

console.log(`my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('Hiteshhhdfdfdfh');
console.log(gameName);
console.log('_____xxxxxxxxxx_________');

console.log(gameName[0]);
console.log(gameName.__proto__);

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-9,4);
console.log(anotherString);
console.log('_________________');

let myDate = new Date(2026, 1, 13);
console.log(myDate.toLocaleString());

console.log(Math.round(4.9));
console.log('----------------------');

const arr= [1,2,3,4,5,6]
// arr.push(8);
// arr.shift();
// console.log(typeof arr.join());
console.log("Sliced array:", arr.slice(1,4));
console.log('original', arr);
console.log("Spliced array:",arr.splice(1,4));
console.log('original', arr);

console.log('--------------------');
const marvelHeros = ['SuperMan', 'Ironman', 'Thor'];
const dcHeros = ['Batman','spiderMan', 'flash'];
// marvelHeros.push(dcHeros)
// const newArray = marvelHeros.concat(dcHeros);
const newArray=[...marvelHeros,...dcHeros]
console.log(newArray);

console.log('--------------------------');

const another_array = [1, 2, 3, [ 4, 5, 6 ], 7, 8, [ 9, 10, [ 11, 12, 14 ]], 15];
const real_array = another_array.flat(Infinity);
console.log(real_array);

console.log('--------------------------');
console.log(Array.isArray("Juned"));
console.log(Array.from("Juned"));
console.log(Array.from({name: "Juned"}));

console.log('_____________________________');

const marvel_heros = ['asas','dffdf' , 'sffdf'];
const dc_heros = ['dsgfg','hgjh'];

const new1 = marvel_heros.concat(dc_heros);
console.log(new1);

const num = 23;
console.log(Array.isArray(num));
console.log(Array.of(num));

function myFunc(name){
    console.log("Hello", name);
}

const name1 = myFunc("ABCD");
const name2 = myFunc("JJJJJ");
console.log('--------------------');


const mySym = Symbol('Key1');
const jsObject = {
    name:'Juned',
    [mySym]: 'myValue',
    "framework n":"react",
    office:'google',
    loginDays:['mon','tue']
}

console.log(jsObject.office);
console.log(jsObject['office']);
console.log(jsObject['framework n']);
console.log( typeof jsObject['mySym']);


console.log('--------------------------');

jsObject.greeting = function(){ 
    console.log('Hello JS user...');
}
jsObject.greeting2 = function(){ 
    console.log(`Hello JS user... ${this.name}`);
}

console.log(jsObject.greeting())
console.log(jsObject.greeting2())
console.log('--------------------------');

// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = '123abc'
tinderUser.name = 'Juned'
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularuser = {}
regularuser.id = '1245jjj'
regularuser.name = "India"
regularuser.address = {}
regularuser.address.city = "new mumbai"
console.log(regularuser);
console.log('--------------------------');

const obj1 = {1:'a' , 2:'b'}
const obj2 = {3:'c' , 4:'d'}
//const obj3 = {obj1 , obj2}
//const obj4 = {...obj1 , ...obj2}
const obj5 = Object.assign(obj1 , obj2)
//console.log(obj3);
//console.log(obj4);
console.log(obj5);
console.log(obj1);
console.log(obj1 == obj5);
console.log(Object.keys(obj5));
console.log(Object.entries(obj5));
console.log(regularuser.isPrototypeOf('name'));

console.log('----------------------------');
const course = {
    courseId:1,
    coursename:'Javascript',
    courseFees:'3.5 k',
    courseDetails:'Not mentioned'
}
const {courseDetails:J} = course
console.log(J);
console.log('+++++++++++++++++++');

const user = {
    Name : "Juned",
    welcomeFunction: function() {
        console.log(`This is a nested function ${this.Name}`); 
        console.log(this);
           

    }
}

user.welcomeFunction();
user.Name = 'Shaikh'
user.welcomeFunction();

console.log(this);

// function chai() {
//     console.log(this);
// }
// chai()

(function chai() {
    console.log('hello from chai block');
})();

(function newChai(){
    console.log('helllo from new chai');
})();

(function newChaiii(){
    console.log('helllo from new chai');
})();

((name) => {
    console.log(`HII ${name}`);
})('Juned')