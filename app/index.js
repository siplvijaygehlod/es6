// import fellow from './fellowship';
// import Animal from './Animal';
import obj from './arrPr0totype';
// console.log("Hello Webpack");
// //console.log("Hello Webpack1");
// //console.log("Hello Webpack2");
// const limit = 100;
// //limit = 300;
// console.log(limit);
// const emails = ["a@email.com", "b@email.com", "c@email.com"];
// emails.push("d@email.com");
// console.log(emails);

// let a = `Good`;
// let greeting = `${a} Morning`;
// console.log(greeting);

// let a1 = [10, 20, 30, 50];
// let b1 = [60, ...a1, 70];
// console.log(b1);

// let aa1 = ["a", "b", "c"];
// let bb1 = [60, ...aa1, 70];
// console.log(bb1);

// function collect(...a) {
//     console.log(a);
// }

// collect(1, 2, 3, 4, 5);

// let names = {
//     V: "vijay",
//     G: "Gehlod"
// };
// let {
//     V,
//     G
// } = names;
// console.log(V, G);

// setTimeout(() => {
//     console.log("Anonymous Function with timeout");
// }, 1000);

// let cheer = () => {
//     console.log("Anonymous Function without timeout");
// }

// cheer();

// console.log(fellow);

// class Lion extends Animal {
//     constructor(name, height, color) {
//         super(name, height);
//         this.color = color;
//     }
//     hello() {
//         console.log(`Hi ${this.name} from Lion class`);
//     }
// }

// let king = new Lion("A", 3.4, "Red");
// king.hello();
// class Instrument {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
// }

// class Guitar extends Instrument {

//     describe() {
//         console.log(`I'm a ${this.name} from the ${this.type} family.`);
//     }
// }


// let fender = new Guitar("Fender", "strings");
// fender.describe();

// let numbersData = [1, 2, 3, 4, 5, 2];
// let numSet = new Set(numbersData);

// for (let elements of numSet.values()) {
//     console.log(elements);
// }

// let z = [4, 5, 6, 7, 8, 5];
// let [, , , four, five] = z;
// console.log(four, five);

// let obj = {
//     a: "first name is vijay",
//     b: "gehlod"
// };

// let {
//     a: w
// } = obj;
// console.log(w);

// let nameArray = ["vijay", "gehlod", "ajay", "vijay"];
// let nameSet = new Set(nameArray);

// for (let newElement of nameSet.values()) {
//     console.log(newElement);
// }
// let dataMap = [
//     ["my name", 'Vijay Gehlod']
// ];
// let aa = new Map(dataMap);
// let keyTwo = {
//     a: 'my company'
// };
// let keyThree = function () {};
// aa.set(keyTwo, 'Systematix');
// aa.set(keyThree, 'function body');
// //console.log(aa);
// for (let [key, value] of aa.entries()) {
//     console.log(`${key} => ${value}`);
// }

// let string = "weqfdhvodwqkbkyudeklhojpgdytsrbfcuilvbc";
// let letters = new Map();
// for (let i = 0; i < string.length; i++) {
//     let letter = string[i];
//     if (!letters.has(letter)) {
//         letters.set(letter, 1);
//     } else {

//         letters.set(letter, letters.get(letter) + 1);
//     }
// }
// console.log(letters);

// var cat = {

//     name: "Gus",
//     color: "gray",
//     age: 15,

//     printInfo: function () {
//         console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 1, prints correctly

//         let nestedFunction = () => {
//             console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); //line 2, loses cat scope
//         }
//         nestedFunction();

//     }
// }
// cat.printInfo(); //prints Name: window Color: undefined Age: undefined

// const addSuffix = x => y => y + x;

// let funload = addSuffix("ness")("heppi");
// console.log(funload);

// const product = x => y => y * x;

// let productResult = product(5)(10);
// console.log(productResult);

// function*  letterMaker() {
//     yield 'a';
//     yield 'b';
// }

// const letterGen = letterMaker();
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

let myArray = [20, 30, 40, 50];
let newArray = myArray.multby(obj);
console.log(`New values: ${newArray}`);

