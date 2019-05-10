// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };

// let myself = {
//     name: "Max",
//     bankAccount: bankAccount,
//     hobbies: ["Sports", "Cooking"]
// };

// myself.bankAccount.deposit(3000);

// console.log(myself);

// Solution 

type BankAccount = { money: number, deposit: (value: number) => number };
type BankClient = { name: string, bankAccount: BankAccount, hobbies: string[] };

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): number {
        return this.money += value;
    }
};

let myself: BankClient = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log('------ Excercise -----');
console.log('Q: myself.bankAccount.deposit(3000);');
console.log('A: ',myself);

