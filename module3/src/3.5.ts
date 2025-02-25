{
  /* Access Modifier */

  class BankAccount {
    public readonly id : number;
    public name : string;
    protected _balance : number;
    constructor(id : number , name : string , balance : number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    addDeposit(amount : number) {
        return this._balance = this._balance + amount;
    }

    getBalance(){
        return this._balance;
    }
  }

  /* const r1 = new BankAccount(56 , "Meskat" , 89);
  console.log(r1);
  console.log(r1.addDeposit(700));
  console.log(r1.getBalance()) */

  class StudentAccount extends BankAccount{
    test(){
        this._balance
    }
  }
}