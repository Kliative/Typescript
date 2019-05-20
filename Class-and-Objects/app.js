"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // can declare and initialise when passed as arguments to the constructor
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
// person.setType("Cool guy"); // This wont work if function is set to private
// Inheretance
var Tawanda = /** @class */ (function (_super) {
    __extends(Tawanda, _super);
    // name = "Shingirai"
    function Tawanda(username) {
        var _this = _super.call(this, "Shingirai", username) || this;
        _this.age = 32;
        return _this;
    }
    return Tawanda;
}(Person));
var tawanda = new Tawanda("klish3");
console.log(tawanda);
