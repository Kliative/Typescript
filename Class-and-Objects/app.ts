class Person {
    name: string;
    private type: string;
    protected age: nunber = 30;

    // can declare and initialise when passed as arguments to the constructor
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Old Guy");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Tawi", "kliative");
console.log('person', person);
// console.log(person.name, person.username, person.age, person.type);
console.log('person breakdown ', person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // This wont work if function is set to private

// Inheretance

class Tawanda extends Person {
    // name = "Shingirai"


    constructor(username: string) {
        super("Shingirai", username);
        this.age = 32;
    }
}

const tawanda = new Tawanda("klish3");
console.log(tawanda);

// Getters and Setters 

class Plants {
    private _species: string = "Default";

    // Perform some action when getting value
    get species() {
        return this._species;
    }
    // Perform some action when setting value
    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Defualt";
        }
    }
}

let plant =  new Plants();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// Static Properties & Methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));