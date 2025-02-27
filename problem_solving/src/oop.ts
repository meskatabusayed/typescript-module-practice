{
  /* 1. Create a Car class with properties like brand, model, and year. Create an object and display its
details. */

  class Car {
    brand: string;
    model: string;
    year: string;
    constructor(brand: string, model: string, year: string) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }

    displayDetails() {
      console.log(`Car : ${this.brand} , ${this.model} , ${this.year}`);
    }
  }

  const car = new Car("BMW", "2024-9-u", "2025");
  // console.log(car);
  // car.displayDetails();

  /* 2. Implement a BankAccount class with methods for deposit and withdrawal. */

  class BankAccount {
    private _balance: number;
    constructor(initialBalance: number) {
      this._balance = initialBalance;
    }

    deposit(amount: number): void {
      if (amount > 0) {
        this._balance += amount;
        console.log(
          `Deposit Balance : ${amount}. New balance : ${this._balance}`
        )
      }
      else{
        console.log("InCorrect Amount")
    }
    }

    withdrawal(amount : number) : void{
        if(amount > 0 && this._balance >= amount){
            this._balance -=amount;
            console.log(`Withdrawal Amount : ${amount}. New Balance : ${this._balance}`)
        }
        else{
            console.log("Invalid Withdraw Amount or InSufficient balance")
        }
    }

    getBalance(){
        return this._balance;
    }
  }

  const bankAccount = new BankAccount(100);
  bankAccount.deposit(100);
  bankAccount.withdrawal(20);
  bankAccount.withdrawal(20);
  bankAccount.withdrawal(20);
}
