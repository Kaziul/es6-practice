class Parent{
    constructor(){
        this.fatherName = 'Schwerznegger';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){ // class er modde je function likha hoy takee method bolee 
        //7 function declaration ekhaneee function likteee hobe na 
        return this.name + ' ' + this.fatherName;

    }
}

const baby = new Child('Arnold');
const baby2 = new Child('Tom');
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());