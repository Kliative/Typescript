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
// Getters and Setters 
var Plants = /** @class */ (function () {
    function Plants() {
        this._species = "Default";
    }
    Object.defineProperty(Plants.prototype, "species", {
        // Perform some action when getting value
        get: function () {
            return this._species;
        },
        // Perform some action when setting value
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Defualt";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plants;
}());
var plant = new Plants();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 100;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Support IT Project");
console.log(newProject);
// Private Constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var wrong = new OnlyOne('The Only One...Again'); // is private and only accessible within the class declaration.
var right = OnlyOne.getInstance();
