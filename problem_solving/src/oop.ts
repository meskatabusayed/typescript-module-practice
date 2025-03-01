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

  // const bankAccount = new BankAccount(100);
  // bankAccount.deposit(100);
  // bankAccount.withdrawal(20);
  // bankAccount.withdrawal(20);
  // bankAccount.withdrawal(20);


  /*  3. Define a Student class with name, age, and grade properties. Add a method to display details. */

  class Student{
    constructor(public name : string, public age : number, public grade : string){}
    displayDetails(){
      console.log(`Name : ${this.name} , Age : ${this.age} and Grade : ${this.grade}`)
    }
  }

  const student = new Student("Meskat" , 99 , "A+");
  // student.displayDetails();

  /* 4. Create a Rectangle class with properties width and height, and a method to calculate the area. */

  class Rectangle{
    constructor(public width : number , public height : number){}
    calculateArea(){
      if(typeof(this.height) === "number" && typeof(this.width) === "number"){
        console.log(this.height * this.width)
      }else{
        console.log("Incorrect Input")
      }
    }
  }

  const rectangle = new Rectangle(459 , 78);
  // rectangle.calculateArea()

  /*  5. Implement a Circle class with a method to calculate the circumference 
  Circumference(পরিধি)=2πr
  */

  class Circle{
    calculateCircumference(radius : number) : number{
      return (2*3.1416*radius);


    }
  }

  const circle = new Circle();
  // console.log(circle.calculateCircumference(2));

  /*  6. Make the balance property of BankAccount private and provide getBalance() and setBalance(). */

  class BankAccount2{
    private _balance : number;
    constructor(public initialBalance : number){
      this._balance = initialBalance;
    }
    getBalance(){
      console.log(`Balance : ${this._balance}`)
    }

    setBalance(amount : number) : void{
      if(amount > 0){
        this._balance += amount;
        console.log(`Deposit Amount : ${amount}. New Balance : ${this._balance}`)
      }else{
        console.log("Invalid Deposit Amount")
      }

    }

  }

  const bankAccount2 = new BankAccount2(100)
  bankAccount2.getBalance();
  bankAccount2.setBalance(2000);
  bankAccount2.setBalance(5500);


}
