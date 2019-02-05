class Animal{
    constructor(name,height){
        this.name = name;
        this.height = height;
    }
    hello(){
        console.log(`Hi ${this.name} from animal class`);
    }
} 

export default Animal;