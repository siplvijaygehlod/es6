import fellow from './fellowship';
import Animal from './Animal';
console.log("Hello Webpack");
//console.log("Hello Webpack1");
//console.log("Hello Webpack2");
const limit = 100;
//limit = 300;
console.log(limit);
const emails = ["a@email.com", "b@email.com", "c@email.com"];
emails.push("d@email.com");
console.log(emails);

let a = `Good`;
let greeting = `${a} Morning`;
console.log(greeting);

let a1 = [10, 20, 30, 50];
let b1 = [60, ...a1, 70];
console.log(b1);

let aa1 = ["a", "b", "c"];
let bb1 = [60, ...aa1, 70];
console.log(bb1);

function collect(...a) {
    console.log(a);
}

collect(1, 2, 3, 4, 5);

let z = [4, 5, 6, 7, 8];
let [, , , four, five] = z;
console.log(four, five);

let names = {
    V: "vijay",
    G: "Gehlod"
};
let {
    V,
    G
} = names;
console.log(V, G);

setTimeout(() => {
    console.log("Anonymous Function");
}, 1000);

let cheer = () => {
    console.log("Anonymous Function1");
}

cheer();

console.log(fellow);

class Lion extends Animal{
    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }
    hello() {
        console.log(`Hi ${this.name} from Lion class`);
    }
}

let king = new Lion("A", 3.4, "Red");
king.hello();
class Instrument {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  }
  
  class Guitar extends Instrument {
   
    describe() {
        console.log( `I'm a ${this.name} from the ${this.type} family.`);
    }
  }
  
  
  let fender = new Guitar("Fender", "strings");
  fender.describe();

  let numbersData = [1,2,3,4,5];
  let numSet = new Set(numbersData);

  for (let elements  of numSet.values()){
      console.log(elements);
  }
  
