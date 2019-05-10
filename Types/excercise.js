"use strict";
// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        return this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log('------ Excercise -----');
console.log('Q: myself.bankAccount.deposit(3000);');
console.log('A: ', myself);
