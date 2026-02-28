const arr = [1, 2,3, 4,5,6,7,8,9,10]

for (const item of arr) {
    console.log(item);
}

console.log('+++++++++++++++++');

const Name = "FFFGFGFGFGfgfgfgfggFGFGFGhjh";
for (const item of Name) {
    console.log(item.startsWith('j'));
    
}

const map = new Map()
map.set('name','Juned');
map.set('surname','shaikh');
map.set('country','india');
console.log(map);

for (const [key , value] of map) {
    console.log(key, value);
}

const myObject = {
    javascript: "Frontend Language",
    Python: "backend Language",
    Java: "backend Language",
    html: "frontend Language"
}

for (const key  in myObject) {
    console.log( myObject[key]);
}

const array = ['fdf', 'dfdf', 'dfdf', 'dfdf', 'dfdf', 'dfdf', 'dfdf', 'dfdf', 'dfdf', 'dfdf']
// array.forEach(element => {
//     console.log(element[0]);
// });

array.forEach( (item) => {
    console.log(item)
})

console.log('++++++++++++++++++++++++++');

function printname(){
    console.log("Juned");
}

array.forEach(printname);
console.log('++++++++++++++++');

const myCoding = [
    {
        name:"Juned",
        coding:"javascript"
    },
    {
        name:"Ali",
        coding:"python"
    },
    {
        name:"Hitesh",
        coding:"java"
    },
    {
        name:"Ramesh",
        coding:"html"
    }
]

const val = myCoding.forEach(item =>{
    console.log(item.name, item.coding);
})

console.log(val);
console.log('++++++++++++++++++++++++++');

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newMyNums = myNums.filter(num => num = num + 5)
console.log(newMyNums);
console.log(myNums);

const numbers = [1,2,3,4,5,6,7,8,9,10];
// const sum = numbers
// .map((item) =>{return item + 1})
// .map((item)=> {return item + 1})
// .map((item)=>item + 1).filter(item => item > 8);
// console.log(sum);

const n = [1, 5, 3]
const sum = n.reduce((acc,currentValue) => acc + currentValue, 0)
console.log(sum);
