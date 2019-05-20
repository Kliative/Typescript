"use strict";
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 30;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Tawi", "kliative");
console.log('person', person);
// console.log(person.name, person.username, person.age, person.type);
console.log('person breakdown ', person.name, person.username);
person.printAge();
// person.setType("Cool guy"); ///
