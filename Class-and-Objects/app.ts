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
console.log('person',person);
// console.log(person.name, person.username, person.age, person.type);
console.log('person breakdown ',person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // This wont work if function is set to private